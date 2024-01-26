import {
  Controller,
  Get,

} from "@nestjs/common";

import { ImageService } from "@/report-card/image.service";
@Controller()
export class AppController {
  constructor(private readonly imageService: ImageService) {}
  @Get()
  home() {
    return "Welcome";
  }
}
