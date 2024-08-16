import { Module } from "@nestjs/common";
import { MovieModule } from "@/movie/movie.module";
import { AppController, apiController } from "@/app.controller";
import { TUserResolver } from "@/t-user/t-user.resolver";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { TUserService } from "@/t-user/t-user.service";
import { CreateUserResolver } from "@/t-user/create-user/create-user.resolver";
import { CommentModule } from "@/comment/comment.module";
import { CoreModule } from "@/core.module";
import { CreateUserService } from "@/t-user/create-user/create-user.service";
import { LoginResolver } from "@/t-user/login/login.resolver";
import { LoginService } from "@/t-user/login/login.service";
import { JwtModule } from "@nestjs/jwt";
import { S3Module } from "nestjs-s3";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { ImageService } from "@/report-card/image.service";
import { ReportCardResolver } from "@/report-card/report-card.resolver";
import { ReportCardService } from "@/report-card/report-card.service";
import { ImageModule } from "@/report-card/image.module";
import { join } from "path";
import { ChatGateway } from "./chat/chat.gateway";
import { JwtStrategy } from "@/jwt.strategy";
import { SurveyModule } from "./survey/survey.module";
import { CreateExamModule } from "@/exam/create-exam/create-exam.module";
import { EditExamModule } from "./exam/edit-exam/edit-exam.module";
import { DeleteExamModule } from "./exam/delete-exam/delete-exam.module";
import * as jwt from "jsonwebtoken";
import { PrismaService } from "./prisma/prisma.service";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: "14d" },
    }),
    MovieModule,
    CoreModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      typePaths: ["./**/*.gql"], // 스키마 파일의 위치
      driver: ApolloDriver,
      playground: true,
      //introspection: true,
      context: async ({ req }) => {
        const token = req.headers.token; // 'token' 헤더에서 JWT 토큰 추출
        let loggedInManager = null; // 변수 초기화
        if (token) {
          try {
            const decoded = jwt.verify(token, process.env.SECRET_KEY); // JWT 검증
            req.user = decoded; // 검증된 사용자 정보를 req.user에 설정
            console.log("User set in context:", req.user.email); // 로그로 확인
            const client = new PrismaService();
            loggedInManager = await client.tUser.findUnique({
              where: { email: req.user.email },
            });
            //console.log("나왔나 계정정보!:", loggedInManager);
          } catch (err) {
            console.error("Token verification failed:", err);
          }
        }
        return {
          headers: req.headers,
          loggedInManager, // 필요 시 다른 컨텍스트 정보와 함께 전달
        };
      },
      definitions: {
        //typecript class 자동생성
        path: join(process.cwd(), "src/schema/graphql.ts"),
        outputAs: "class",
      },
    }),
    CommentModule,
    S3Module.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (ConfigService: ConfigService) => ({
        config: {
          credentials: {
            accessKeyId: ConfigService.get(process.env.AWS_KEY),
            secretAccessKey: ConfigService.get(process.env.AWS_SECRET),
          },
          region: ConfigService.get(process.env.AWS_REGION),
        },
      }),
      inject: [ConfigService],
    }),
    ImageModule,
    SurveyModule,
    CreateExamModule,
    EditExamModule,
    DeleteExamModule,
  ],
  controllers: [AppController, apiController],
  providers: [
    JwtStrategy,
    TUserResolver,
    TUserService,
    CreateUserResolver,
    CreateUserService,
    LoginResolver,
    LoginService,
    ImageService,
    ReportCardResolver,
    ReportCardService,
    ChatGateway,
  ],
})
export class AppModule {}
