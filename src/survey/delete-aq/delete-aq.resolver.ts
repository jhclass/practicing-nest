import { Args, Context, Mutation, Resolver } from "@nestjs/graphql";
import { DeleteAqService } from "@/survey/delete-aq/delete-aq.service";
import { UseGuards } from "@nestjs/common";
import { gqlAuthGuard } from "@/auth/gql-auth.guard";
import { CommonResponse } from "@/schema/graphql";

@Resolver()
export class DeleteAqResolver {
  constructor(private readonly deleteAqService: DeleteAqService) {}
  @UseGuards(gqlAuthGuard)
  @Mutation(() => CommonResponse)
  async deleteAQ(
    @Args("id") id: number,
    @Context() context: any,
  ): Promise<CommonResponse> {
    const user = context.user;
    return this.deleteAqService.deleteAqFunc(id, user);
  }
}
