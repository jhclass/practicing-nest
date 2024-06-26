import { Module } from "@nestjs/common";
import { CreateSurveyResolver } from "@/survey/create-survey/create-survey.resolver";
import { CreateSurveyService } from "@/survey/create-survey/create-survey.service";
import { CoreModule } from "@/core.module";
@Module({
  imports: [CoreModule],
  providers: [CreateSurveyResolver, CreateSurveyService],
})
export class CreateSurveyModule {}
