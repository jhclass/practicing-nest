import { Injectable } from "@nestjs/common";
import { PrismaService } from "@/prisma/prisma.service";
import { CommonResponse } from "@/schema/graphql";
@Injectable()
export class EditSurveyService {
  constructor(private client: PrismaService) {}
  async editSurveyService(
    id: number,
    writter: string,
    category: string,
  ): Promise<CommonResponse> {
    try {
      //
      const existingId = await this.client.survey.findUnique({
        where: { id },
      });
      if (!existingId) {
        throw new Error("id 가 존재하지 않습니다. 다시 확인하세요.");
      }
      await this.client.survey.update({
        where: { id },
        data: {
          category,
          writter,
        },
      });
      return { ok: true, message: "변경완료 되었습니다." };
    } catch (error) {
      console.error(error.message);
      return {
        ok: false,
        message: "에러메세지 발생",
        error: `Error:${error.message}`,
      };
    }
  }
}
