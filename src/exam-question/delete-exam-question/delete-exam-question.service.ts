import { PrismaService } from "@/prisma/prisma.service";
import { CommonResponse } from "@/schema/graphql";
import { Injectable } from "@nestjs/common";

@Injectable()
export class DeleteExamQuestionService {
  constructor(private readonly client: PrismaService) {}
  async deleteExamQuestionFunc(id: number): Promise<CommonResponse> {
    try {
      if (!id) {
        throw new Error(`id 는 필수값입니다.`);
      }
      const existingId = this.client.examQuestion.findUnique({ where: { id } });
      if (!existingId) {
        throw new Error("아이디가 없습니다.");
      }
      await this.client.examQuestion.delete({ where: { id } });
      return {
        ok: true,
        message: "정상적으로 삭제 완료 되었습니다.",
      };
    } catch (error) {
      console.error(error.message);
      return {
        ok: false,
        error: `Error:${error.message}`,
        message: "에러발생! 에러메세지를 확인하세요.",
      };
    }
  }
}
