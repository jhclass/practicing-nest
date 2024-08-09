import { Module } from "@nestjs/common";
import { CoreModule } from "@/core.module";
import { EditExamService } from "./edit-exam.service";
import { EditExamResolver } from "./edit-exam.resolver";

@Module({
  imports: [CoreModule],
  providers: [EditExamService, EditExamResolver],
})
export class EditExamModule {}
