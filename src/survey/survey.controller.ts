import { PrismaService } from "@/prisma/prisma.service";
import { Controller, Get, Query } from "@nestjs/common";

@Controller("survey")
export class SurveyController {
  constructor(private readonly client: PrismaService) {}
  @Get("/input")
  sayHello() {
    return "hello";
  }
  async inputText(
    @Query("name") name: string,
    @Query("answer") answer: string,
    @Query("title") title: string,
  ) {
    const check = await this.client.studentSurvey.create({
      data: {
        name,
        answer,
        title,
      },
    });
    console.log(check);
    return {
      ok: true,
      message: "완료되었습니다.",
    };
  }
}
