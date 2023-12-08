//import { Query } from "@nestjs/common";
import {Query, Resolver } from "@nestjs/graphql";

@Resolver()
export class TUserResolver {
  @Query(() => String)
  async hello() {
    return "Hello World!";
  }
}
