import { PrismaService } from "@/prisma/prisma.service";
import { Injectable } from "@nestjs/common";
import { CommonResponse } from "@/schema/graphql";

@Injectable()
export class EditAqService {
  constructor(private client: PrismaService) {}
  async editAqFunc(
    id: number,
    question: string,
    answer: string,
  ): Promise<CommonResponse> {
    try {
      if (!id) {
        throw new Error("필수값 입니다.");
      }
      const existingData = await this.client.admissionQuestion.findFirst({
        where: {
          id,
        },
      });
      if (!existingData) {
        throw new Error("존재하지 않는 데이터 입니다.");
      }
      await this.client.admissionQuestion.update({
        where: {
          id,
        },
        data: {
          question,
          answer,
        },
      });
      return {
        ok: true,
        message: "정상적으로 수정완료 되었습니다.",
      };
    } catch (error) {
      console.error(error.message);
      return {
        ok: true,
        message: "에러발생! 에러메세지를 확인하세요",
        error: `Error:${error.message}`,
      };
    }
  }
}
