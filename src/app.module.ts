import { Module } from "@nestjs/common";
import { MovieModule } from "./movie/movie.module";
import { AppController } from "./app.controller";
import { TUserResolver } from "./t-user/t-user.resolver";

import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  imports: [
    MovieModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      autoSchemaFile: true,
      driver: ApolloDriver,
      playground: false,
    }),
  ],
  controllers: [AppController],
  providers: [TUserResolver],
})
export class AppModule {}
