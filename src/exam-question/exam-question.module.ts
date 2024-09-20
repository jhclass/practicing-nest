import { Module } from "@nestjs/common";
import { CreateExamQuestionModule } from "./create-exam-question/create-exam-question.module";
import { EditExamQuestionModule } from "./edit-exam-question/edit-exam-question.module";
import { DeleteExamQuestionModule } from "./delete-exam-question/delete-exam-question.module";
import { SearchExamQuestionModule } from "./search-exam-question/search-exam-question.module";
import { CoreModule } from "@/core.module";

@Module({
  imports: [
    CreateExamQuestionModule,
    EditExamQuestionModule,
    DeleteExamQuestionModule,
    SearchExamQuestionModule,
    CoreModule,
  ],
})
export class ExamQuestionModule {}
