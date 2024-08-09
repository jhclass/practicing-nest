import { Query, Resolver } from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";
import { TUserService } from "./t-user.service";
import { GqlAuthGuard } from "@/auth/gql-auth.guard";
@Resolver()
export class TUserResolver {
  constructor(private userService: TUserService) {}
  @UseGuards(GqlAuthGuard)
  @Query()
  async allUsers() {
    return this.userService.findAll();
  }
}
