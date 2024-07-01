import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { CreateAqService } from "./create-aq.service";
import { CommonResponse } from "@/schema/graphql";

@Resolver()
export class CreateAqResolver {
  constructor(private readonly createAqService: CreateAqService) {}
  //@UseGuards(gqlAuthGuard)
  @Mutation(() => CommonResponse)
  createAQ(
    @Args("surveyId") surveyId: number,
    @Args("question") question: string,
    @Args("answer") answer: string,
  ): Promise<CommonResponse> {
    return this.createAqService.createAqService(surveyId, question, answer);
  }
}
