import { GqlAuthGuard } from "@/auth/gql-auth.guard";
import { ResultSearchExamQuestion } from "@/schema/graphql";
import { Resolver, Query, Args } from "@nestjs/graphql";
import { UseGuards } from "@nestjs/common";
import { SearchExamQuestionService } from "./search-exam-question.service";

@Resolver()
export class SearchExamQuestionResolver {
  constructor(private searchExamQuestionService: SearchExamQuestionService) {}
  @UseGuards(GqlAuthGuard)
  @Query()
  async searchExamQuestion(
    @Args("id") id: number,
    @Args("examId") examId: number,
  ): Promise<ResultSearchExamQuestion> {
    return this.searchExamQuestionService.searchExamQuestionServiceFunc(
      id,
      examId,
    );
  }
}
