import { PrismaService } from "@/prisma/prisma.service";
import { CommonResponse } from "@/schema/graphql";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CreateAqService {
  constructor(private client: PrismaService) {}
  async createAqService(
    surveyId: number,
    question: string,
    answer: string,
  ): Promise<CommonResponse> {
    try {
      if (!surveyId || !question || !answer) {
        throw new Error("모든 필드를 입력해야 합니다.");
      }
      const checkSurveyId = await this.client.survey.findUnique({
        where: { id: surveyId },
      });
      if (!checkSurveyId) {
        throw new Error("해당설문은 없습니다. 설문(survey)를 먼저 생성하세요.");
      }
      const createAqData = this.client.admissionQuestion.create({
        data: {
          surveyId,
          question,
          answer,
        },
      });
      if (!createAqData) {
        throw new Error("정상적으로 데이터가 생성되지 않았습니다.");
      }
      return {
        ok: true,
        message: "정상적으로 데이터가 생성 되었습니다.",
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
