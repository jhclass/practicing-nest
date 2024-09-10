import { CommonResponse } from "@/schema/graphql";
import { Mutation, Resolver, Args } from "@nestjs/graphql";
import { EditExamQuestionService } from "./edit-exam-question.service";
import { UseGuards } from "@nestjs/common";
import { GqlAuthGuard } from "@/auth/gql-auth.guard";

@Resolver()
export class EditExamQuestionResolver {
  constructor(
    private readonly editExamQuestionService: EditExamQuestionService,
  ) {}
  @UseGuards(GqlAuthGuard)
  @Mutation()
  async editExamQuestion(
    @Args("id") id: number,
    @Args("examId") examId: number,
    @Args("item") item: string,
    @Args("indexNum") indexNum: number,
    @Args("answer") answer: string,
    @Args("fileUrl") fileUrl: string[],
  ): Promise<CommonResponse> {
    return this.editExamQuestionService.editExamQuestionFunc(
      id,
      examId,
      item,
      indexNum,
      answer,
      fileUrl,
    );
  }
}
