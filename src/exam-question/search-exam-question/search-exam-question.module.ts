import { CoreModule } from "@/core.module";
import { Module } from "@nestjs/common";
import { SearchExamQuestionResolver } from "./search-exam-question.resolver";
import { SearchExamQuestionService } from "./search-exam-question.service";

@Module({
  imports: [CoreModule],
  providers: [SearchExamQuestionResolver, SearchExamQuestionService],
})
export class SearchExamQuestionModule {}
