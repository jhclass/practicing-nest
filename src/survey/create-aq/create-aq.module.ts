import { Module } from "@nestjs/common";
import { CreateAqService } from "@/survey/create-aq/create-aq.service";
import { CreateAqResolver } from "@/survey/create-aq/create-aq.resolver";
import { CoreModule } from "@/core.module";
@Module({
  imports: [CoreModule],
  providers: [CreateAqService, CreateAqResolver],
})
export class CreateAqModule {}
