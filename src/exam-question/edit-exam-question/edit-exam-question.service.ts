import { PrismaService } from "@/prisma/prisma.service";
import { CommonResponse } from "@/schema/graphql";
import { Injectable } from "@nestjs/common";

@Injectable()
export class EditExamQuestionService {
  constructor(private readonly client: PrismaService) {}
  async editExamQuestionFunc(
    id: number,
    examId: number,
    item: string,
    indexNum: number,
    answer: string,
    fileUrl: string[],
  ): Promise<CommonResponse> {
    try {
      if (!id || !examId) {
        throw new Error("id 와 examId 는 필수값입니다.");
      }
      const existingId = await this.client.examQuestion.findUnique({
        where: {
          id,
        },
      });
      if (!existingId) {
        throw new Error("ID 가 존재하지 않습니다.");
      }
      await this.client.examQuestion.update({
        where: { id },
        data: {
          item,
          indexNum,
          answer,
          fileUrl,
        },
      });
      return {
        ok: true,
        message: "정상적으로 수정 완료 되었습니다.",
      };
    } catch (error) {
      console.error(error.message);
      return {
        ok: false,
        message: "에러발생! 에러메세지를 확인하세요!",
        error: `Error:${error.message}`,
      };
    }
  }
}
