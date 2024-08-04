import { Module } from "@nestjs/common";

import { EditSurveyResolver } from "@/survey/edit-survey/edit-survey.resolver";
import { EditSurveyService } from "@/survey/edit-survey/edit-survey.service";
import { CoreModule } from "@/core.module";

@Module({
  imports: [CoreModule],
  providers: [EditSurveyResolver, EditSurveyService],
})
export class EditSurveyModule {}
