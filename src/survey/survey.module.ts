import { Module } from "@nestjs/common";
import { CreateAqModule } from "./create-aq/create-aq.module";
import { EditAqModule } from "./edit-aq/edit-aq.module";
import { CreateSurveyModule } from "./create-survey/create-survey.module";
import { EditSurveyModule } from "./edit-survey/edit-survey.module";

@Module({
  imports: [CreateSurveyModule, EditSurveyModule, CreateAqModule, EditAqModule],
})
export class SurveyModule {}
