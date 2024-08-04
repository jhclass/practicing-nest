import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { CreateExamService } from "./create-exam.service";

@Resolver()
export class CreateExamResolver {
  constructor(private createExamService: CreateExamService) {}
  @Mutation("createExam")
  async createExam(
    @Args("title") title: string,
    @Args("tUserId") tUserId: number,
  ) {
    return this.createExamService.createExamService(title, tUserId);
  }
}
