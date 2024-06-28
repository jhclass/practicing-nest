import { Module } from "@nestjs/common";
import { CreateAqService } from "./create-aq.service";
import { CreateAqResolver } from "./create-aq.resolver";
import { CoreModule } from "@/core.module";
@Module({
  imports:[CoreModule]
  providers: [CreateAqService, CreateAqResolver],
})
export class CreateAqModule {}
