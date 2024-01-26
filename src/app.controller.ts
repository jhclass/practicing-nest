import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ImageService } from "./report-card/image.service";
@Controller()
export class AppController {
  constructor(private readonly imageService: ImageService) {}
  @Get()
  home() {
    return "Welcome";
  }
  //upload 가 엔드포인트 프론트 상황에 따라 변화해야함
  //insomnia 로 테스트 완료 
  //s3 에 정상적으로 폴더 생성 및 파일업로드 확인.
  @Post("upload")
  @UseInterceptors(FileInterceptor("file"))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    return await this.imageService.uploadFileToS3(file);
  }
}
