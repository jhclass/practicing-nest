import { CoreModule } from "@/core.module";
import { Module } from "@nestjs/common";
import { CreateExamResolver } from "@/exam/create-exam/create-exam.resolver";
import { CreateExamService } from "@/exam/create-exam/create-exam.service";

@Module({
  imports: [CoreModule],
  providers: [CreateExamResolver, CreateExamService],
})
export class CreateExamModule {}
