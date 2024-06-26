import { PrismaService } from "@/prisma/prisma.service";
import { CommonResponse } from "@/schema/graphql";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CreateSurveyService {
  constructor(private prisma: PrismaService) {}
  async createSurveyService(
    writter: string,
    category: string,
  ): Promise<CommonResponse> {
    try {
      const createSurveyData = await this.prisma.survey.create({
        data: {
          writter,
          category,
        },
      });
      if (!createSurveyData) {
        throw new Error(`데이터가 생성되지 않았습니다. 다시 확인해주세요.`);
      }
      return {
        ok: true,
        message: "데이터가 정상적으로 생성되었습니다.",
      };
    } catch (error) {
      console.error(error.message);
      return {
        ok: false,
        message: "에러발생! 에러메세지를 확인하세요.",
        error: `Error:${error.message}`,
      };
    }
  }
}
