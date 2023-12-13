import { Module } from "@nestjs/common";
import { MovieModule } from "./movie/movie.module";
import { AppController } from "./app.controller";
import { TUserResolver } from "./t-user/t-user.resolver";

import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { TUserService } from "./t-user/t-user.service";
import { PrismaService } from "./prisma/prisma.service";

@Module({
  imports: [
    MovieModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      typePaths: ["./**/*.gql"], // 스키마 파일의 위치
      driver: ApolloDriver,
      playground: true,
    }),
  ],
  controllers: [AppController],
  providers: [TUserResolver, TUserService, PrismaService],
})
export class AppModule {}
