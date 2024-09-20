import { GqlAuthGuard } from "@/auth/gql-auth.guard";
import { CommonResponse } from "@/schema/graphql";
import { UseGuards } from "@nestjs/common";
import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { DeleteExamQuestionService } from "./delete-exam-question.service";

@Resolver()
export class DeleteExamQuestionResolver {
  //다른 방식으로 의존성을 주입해 보았음.
  //명시적으로 선언 후 초기화 진행.
  private readonly deleteExamQuestionService: any;
  constructor(deleteExamQuestionService: DeleteExamQuestionService) {
    this.deleteExamQuestionService = deleteExamQuestionService;
  }
  @UseGuards(GqlAuthGuard)
  @Mutation()
  async deleteExamQuestion(@Args("id") id: number): Promise<CommonResponse> {
    return this.deleteExamQuestionService.deleteExamQuestionFunc(id);
  }
}
