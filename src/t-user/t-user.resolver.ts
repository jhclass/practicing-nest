import { Query, Resolver } from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";
import { TUserService } from "./t-user.service";
import { gqlAuthGuard } from "@/auth/gql-auth.guard";
@Resolver()
export class TUserResolver {
  constructor(private userService: TUserService) {}
  @UseGuards(gqlAuthGuard)
  @Query()
  async allUsers() {
    return this.userService.findAll();
  }
}
