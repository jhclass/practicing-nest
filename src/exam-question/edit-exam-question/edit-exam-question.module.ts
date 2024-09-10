import { CoreModule } from "@/core.module";
import { Module } from "@nestjs/common";
import { EditExamQuestionResolver } from "./edit-exam-question.resolver";
import { EditExamQuestionService } from "./edit-exam-question.service";

@Module({
  imports: [CoreModule],
  providers: [EditExamQuestionResolver, EditExamQuestionService],
})
export class EditExamQuestionModule {}
