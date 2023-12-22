import { Module } from "@nestjs/common";
import { MovieModule } from "@/movie/movie.module";
import { AppController } from "@/app.controller";
import { TUserResolver } from "@/t-user/t-user.resolver";

import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { TUserService } from "@/t-user/t-user.service";
import { PrismaService } from "@/prisma/prisma.service";
import { CommentResolver } from "@/comment/createComment/comment.resolver";
import { CommentService } from "@/comment/createComment/comment.service";
import { DeleteCommentResolver } from "@/comment/deleteComment/deleteComment.resolver";
import { DeleteCommentService } from "@/comment/deleteComment/deleteComment.service";
import { CreateUserResolver } from "@/t-user/create-user/create-user.resolver";
@Module({
  imports: [
    MovieModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      typePaths: ["./**/*.gql"], // 스키마 파일의 위치
      driver: ApolloDriver,
      playground: true,
      //introspection: true,
    }),
  ],
  controllers: [AppController],
  providers: [
    TUserResolver,
    TUserService,
    PrismaService,
    CommentResolver,
    CommentService,
    DeleteCommentResolver,
    DeleteCommentService,
    CreateUserResolver,
  ],
})
export class AppModule {}
