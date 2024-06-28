import { Mutation, Resolver, Args } from "@nestjs/graphql";
import { EditSurveyService } from "./edit-survey.service";
import { CommonResponse } from "@/schema/graphql";
import { UseGuards } from "@nestjs/common";
import { gqlAuthGuard } from "@/auth/gql-auth.guard";

@Resolver()
export class EditSurveyResolver {
  constructor(private readonly editSurveyService: EditSurveyService) {}
  @UseGuards(gqlAuthGuard)
  @Mutation(() => CommonResponse)
  editSurvey(
    @Args("id") id: number,
    @Args("category") category: string,
    @Args("writter") writter: string,
  ): Promise<CommonResponse> {
    return this.editSurveyService.editSurveyService(id, category, writter);
  }
}
