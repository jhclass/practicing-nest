import { CoreModule } from "@/core.module";
import { Module } from "@nestjs/common";
import { DeleteExamResolver } from "./delete-exam.resolver";
import { DeleteExamService } from "./delete-exam.service";

@Module({
  imports: [CoreModule],
  providers: [DeleteExamResolver, DeleteExamService],
})
export class DeleteExamModule {}
