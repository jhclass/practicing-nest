import { Query, Resolver, Args } from "@nestjs/graphql";

import { TUserService } from "./t-user.service";
@Resolver()
export class TUserResolver {
  constructor(private userService: TUserService) {}
  @Query()
  async allUsers() {
    return this.userService.findAll();
  }
}
