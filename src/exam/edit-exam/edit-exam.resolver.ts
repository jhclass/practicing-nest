import { Args, Context, Mutation, Resolver } from "@nestjs/graphql";
import { EditExamService } from "@/exam/edit-exam/edit-exam.service";
import { GqlAuthGuard } from "@/auth/gql-auth.guard";
import { UseGuards } from "@nestjs/common";

interface LoggedInManager {
  id: number;
  name: string;
  email: string;
  phoneNum: string;
  rating: string;
  createdAt: string;
  updatedAt: string;
}

@Resolver()
export class EditExamResolver {
  constructor(private editExamService: EditExamService) {}
  @UseGuards(GqlAuthGuard)
  @Mutation("editExam")
  async editExam(
    @Args("id") id: number,
    @Args("title") title: string,
    @Args("tUserId") tUserId: number,
    @Args("subjectName") subjectName: string,
    @Context("loggedInManager") loggedInManager: LoggedInManager,
  ) {
    return this.editExamService.editExamService(
      id,
      title,
      tUserId,
      subjectName,
      loggedInManager,
    );
  }
}
