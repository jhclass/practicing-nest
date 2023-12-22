import { Module } from "@nestjs/common";
import { MovieModule } from "@/movie/movie.module";
import { AppController } from "@/app.controller";
import { TUserResolver } from "@/t-user/t-user.resolver";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { TUserService } from "@/t-user/t-user.service";
import { CreateUserResolver } from "@/t-user/create-user/create-user.resolver";
import { CommentModule } from "@/comment/comment.module";
import { CoreModule } from "@/core.module";
@Module({
  imports: [
    MovieModule,
    CoreModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      typePaths: ["./**/*.gql"], // 스키마 파일의 위치
      driver: ApolloDriver,
      playground: true,
      //introspection: true,
    }),
    CommentModule,
  ],
  controllers: [AppController],
  providers: [TUserResolver, TUserService, CreateUserResolver],
})
export class AppModule {}
