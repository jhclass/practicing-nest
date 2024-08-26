import { Args, Mutation, Resolver, Context } from "@nestjs/graphql";
import { CreateExamService } from "./create-exam.service";
import { GqlAuthGuard } from "@/auth/gql-auth.guard";
import { UseGuards } from "@nestjs/common";

@Resolver()
export class CreateExamResolver {
  constructor(private createExamService: CreateExamService) {}
  @UseGuards(GqlAuthGuard)
  @Mutation(() => String)
  async createExam(
    @Args("title") title: string,
    @Args("subjectName") subjectName: string,
    @Context() context,
  ) {
    const user = context.req.user;
    console.log("유저???:", user);
    return this.createExamService.createExamService(
      title,
      subjectName,
      user.id,
      user.rating,
    );
  }
}
