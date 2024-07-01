import { Mutation, Resolver, Args } from "@nestjs/graphql";
import { EditAqService } from "@/survey/edit-aq/edit-aq.service";
import { CommonResponse } from "@/schema/graphql";
@Resolver()
export class EditAqResolver {
  constructor(private readonly editAqService: EditAqService) {}
  @Mutation(() => CommonResponse)
  async editAQ(
    @Args("id") id: number,
    @Args("question") question: string,
    @Args("answer") answer: string,
  ): Promise<CommonResponse> {
    return this.editAqService.editAqFunc(id, question, answer);
  }
}
