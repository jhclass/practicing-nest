import { Module } from "@nestjs/common";
import { DeleteExamQuestionResolver } from "./delete-exam-question.resolver";
import { DeleteExamQuestionService } from "./delete-exam-question.service";
import { CoreModule } from "@/core.module";

@Module({
  imports: [CoreModule],
  providers: [DeleteExamQuestionResolver, DeleteExamQuestionService],
})
export class DeleteExamQuestionModule {}
