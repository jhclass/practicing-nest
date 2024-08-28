import { Module } from "@nestjs/common";
import { CoreModule } from "@/core.module";
import { CreateExamQuestionResolver } from "@/exam-question/create-exam-question/create-exam-question.resolver";
import { CreateExamQuestionService } from "@/exam-question/create-exam-question/create-exam-question.service";

@Module({
  imports: [CoreModule],
  providers: [CreateExamQuestionService, CreateExamQuestionResolver],
})
export class CreateExamQuestionModule {}
