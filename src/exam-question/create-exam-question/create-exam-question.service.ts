import { CommonResponse } from "@/schema/graphql";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "@/prisma/prisma.service";

@Injectable()
export class CreateExamQuestionService {
  constructor(private readonly client: PrismaService) {}
  async createExamQuestionFunc(
    examId: number,
    item: string,
    indexNum: number,
    answer: string,
    fileUrl: string[],
    userName: string,
  ): Promise<CommonResponse> {
    try {
      if (!examId || !item || !indexNum || !answer) {
        throw new Error("필수값이 입력되지 않았습니다. 다시 확인하세요.");
      }
      await this.client.examQuestion.create({
        data: {
          examId,
          item,
          indexNum,
          answer,
          fileUrl,
          lastModifiedByName: userName,
        },
      });
      return {
        ok: true,
        message: "정상적으로 등록 완료 되었습니다.",
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
