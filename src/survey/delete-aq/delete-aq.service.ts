import { PrismaService } from "@/prisma/prisma.service";
import { CommonResponse } from "@/schema/graphql";
import { Injectable } from "@nestjs/common";

@Injectable()
export class DeleteAqService {
  constructor(private client: PrismaService) {}
  async deleteAqFunc(id: number, user: any): Promise<CommonResponse> {
    try {
      console.log("user1111111", user);
      const existingData = await this.client.admissionQuestion.findUnique({
        where: { id },
      });
      if (!existingData) {
        throw new Error(`데이터가 없습니다. id 를 다시 확인하세요`);
      }
      await this.client.admissionQuestion.delete({
        where: { id },
      });
      return {
        ok: true,
        message: `id:${id}, 데이터가 정상적으로 삭제 되었습니다.`,
      };
    } catch (error) {
      console.error(error.message);
      return {
        ok: false,
        message: "에러발생! 에러메세지를 확인하세요.",
        error: `Errir:${error.message}`,
      };
    }
  }
}
