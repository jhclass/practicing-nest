import { Module } from "@nestjs/common";
import { DeleteAqResolver } from "./delete-aq.resolver";
import { DeleteAqService } from "./delete-aq.service";
import { CoreModule } from "@/core.module";

@Module({
  imports: [CoreModule],
  providers: [DeleteAqResolver, DeleteAqService],
})
export class DeleteAqModule {}
