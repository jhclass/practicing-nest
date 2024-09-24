import { Module } from "@nestjs/common";
import { CreateAqModule } from "./create-aq/create-aq.module";
import { EditAqModule } from "./edit-aq/edit-aq.module";
import { CreateSurveyModule } from "./create-survey/create-survey.module";
import { EditSurveyModule } from "./edit-survey/edit-survey.module";
import { SurveyController } from "./survey.controller";
import { CoreModule } from "@/core.module";

@Module({
  imports: [
    CreateSurveyModule,
    EditSurveyModule,
    CreateAqModule,
    EditAqModule,
    CoreModule,
  ],
  controllers: [SurveyController],
})
export class SurveyModule {}
