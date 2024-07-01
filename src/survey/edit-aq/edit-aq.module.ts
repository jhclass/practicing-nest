import { Module } from "@nestjs/common";
import { EditAqService } from "./edit-aq.service";
import { EditAqResolver } from "./edit-aq.resolver";
import { CoreModule } from "@/core.module";

@Module({
  imports: [CoreModule],
  providers: [EditAqService, EditAqResolver],
})
export class EditAqModule {}
