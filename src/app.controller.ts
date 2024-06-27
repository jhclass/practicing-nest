import { Controller, Get } from "@nestjs/common";
import { ImageService } from "@/report-card/image.service";

@Controller("")
export class AppController {
  constructor(private readonly imageService: ImageService) {}
  @Get()
  home() {
    return "Welcome";
  }
}
@Controller("/api")
export class apiController {
  constructor(private readonly imageService: ImageService) {}
  @Get()
  home() {
    return "어쩌구 저쩌구";
  }
}
