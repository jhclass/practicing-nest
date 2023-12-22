import { Module } from "@nestjs/common";
import { PrismaService } from "@/prisma/prisma.service";
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // 다른 모듈에서 PrismaService를 사용할 수 있도록 함
})
export class CoreModule {}
