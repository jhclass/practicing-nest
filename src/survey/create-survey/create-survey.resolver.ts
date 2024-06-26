import { Resolver, Mutation, Args } from "@nestjs/graphql";
import { CreateSurveyService } from "@/survey/create-survey/create-survey.service";
import { CommonResponse } from "@/schema/graphql";

@Resolver()
export class CreateSurveyResolver {
  constructor(private readonly createSurveyService: CreateSurveyService) {}

  @Mutation(() => CommonResponse)
  createSurvey(
    @Args("writter") writter: string,
    @Args("category") category: string,
  ): Promise<CommonResponse> {
    return this.createSurveyService.createSurveyService(writter, category);
  }
}
