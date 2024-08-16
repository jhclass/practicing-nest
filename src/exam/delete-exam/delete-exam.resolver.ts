import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { DeleteExamService } from "@/exam/delete-exam/delete-exam.service";
@Resolver()
export class DeleteExamResolver {
  constructor(private deleteExamService: DeleteExamService) {}
  @Mutation(() => {})
  async deleteExam(@Args("id") id: number) {
    return this.deleteExamService.deleteExamService(id);
  }
}
