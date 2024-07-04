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
import { JwtModule, JwtService } from "@nestjs/jwt";
import { S3Module } from "nestjs-s3";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { ImageService } from "@/report-card/image.service";
import { ReportCardResolver } from "@/report-card/report-card.resolver";
import { ReportCardService } from "@/report-card/report-card.service";
import { ImageModule } from "@/report-card/image.module";
import { join } from "path";
import { ChatGateway } from "./chat/chat.gateway";
import { JwtStrategy } from "@/jwt.strategy";
import { CreateSurveyModule } from "@/survey/create-survey/create-survey.module";
import { EditSurveyModule } from "@/survey/edit-survey/edit-survey.module";
import { CreateAqModule } from "@/survey/create-aq/create-aq.module";
import { EditAqModule } from "./survey/edit-aq/edit-aq.module";
import { DeleteAqModule } from "./survey/delete-aq/delete-aq.module";
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
        const jwtService = new JwtService({
          secret: process.env.SECRET_KEY,
        });

        let user = null;
        const token = req.headers.token;

        if (token) {
          try {
            const decodedToken = await jwtService.verifyAsync(token);
            const prisma = new PrismaService();
            user = await prisma.tUser.findUnique({
              where: {
                email: decodedToken.email,
              },
            });
          } catch (e) {
            console.error("Token verification error:", e.message);
          }
        }

        return { req, user };
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
    CreateSurveyModule,
    EditSurveyModule,
    CreateAqModule,
    EditAqModule,
    DeleteAqModule,
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
