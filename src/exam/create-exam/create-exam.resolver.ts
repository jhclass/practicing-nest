import { Args, Mutation, Resolver, Context } from "@nestjs/graphql";
import { CreateExamService } from "./create-exam.service";
import { GqlAuthGuard } from "@/auth/gql-auth.guard";
import { UseGuards } from "@nestjs/common";
import { LoggedInManager } from "@/types";

@Resolver()
export class CreateExamResolver {
  constructor(private createExamService: CreateExamService) {}
  @UseGuards(GqlAuthGuard)
  @Mutation(() => String)
  async createExam(
    @Args("title") title: string,
    @Args("tUserId") tUserId: number,
    @Args("subjectName") subjectName: string,
    @Context("loggedInManager") loggedInManager: LoggedInManager,
  ) {
    return this.createExamService.createExamService(
      title,
      tUserId,
      subjectName,
      loggedInManager,
    );
  }
}
