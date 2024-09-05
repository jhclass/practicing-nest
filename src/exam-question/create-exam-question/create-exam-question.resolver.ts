import { GqlAuthGuard } from "@/auth/gql-auth.guard";
import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Resolver, Context } from "@nestjs/graphql";
import { CreateExamQuestionService } from "@/exam-question/create-exam-question/create-exam-question.service";

@Resolver()
export class CreateExamQuestionResolver {
  constructor(private createExamQuestionService: CreateExamQuestionService) {}
  @UseGuards(GqlAuthGuard)
  @Mutation(() => String)
  async createExamQuestion(
    @Args("examId") examId: number,
    @Args("item") item: string,
    @Args("indexNum") indexNum: number,
    @Args("answer") answer: string,
    @Args("filePath") filePath: string[],
    @Context()
    context: any,
  ) {
    const user = context.req.user;
    return this.createExamQuestionService.createExamQuestionFunc(
      examId,
      item,
      indexNum,
      answer,
      filePath,
      user.name,
    );
  }
}
