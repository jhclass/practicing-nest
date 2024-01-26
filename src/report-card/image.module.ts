import { Module } from "@nestjs/common";
import { ImageService } from "@/report-card/image.service";
import { ImageController } from "@/report-card/image.contoller";

@Module({
  controllers: [ImageController],
  providers: [ImageService],
  exports: [ImageService],
})
export class ImageModule {}
