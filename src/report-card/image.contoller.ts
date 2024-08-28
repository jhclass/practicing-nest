import {
  Body,
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { ImageService } from "@/report-card/image.service";

@Controller("images") // 엔드포인트
export class ImageController {
  constructor(private readonly imageService: ImageService) {}
  //upload 가 엔드포인트 프론트 상황에 따라 변화해야함
  //insomnia 로 테스트 완료
  //s3 에 정상적으로 폴더 생성 및 파일업로드 확인.r
  //이미지 이름이 중복될 경우엔 덮어쓰기가 되는듯?
  //알아서 이미지 이름을 변경해서 보내던지 해야합니다 :)
  @Post("upload")
  @UseInterceptors(FileInterceptor("file"))
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body("folderName") folderName: string = "defaultFolder", //body보낼래 param 으로 보낼지는 당신의 판단.
  ) {
    if (!folderName) {
      throw new Error("folderName 은 필수값입니다.");
    }
    return await this.imageService.uploadFileToS3(file, folderName);
  }
}
