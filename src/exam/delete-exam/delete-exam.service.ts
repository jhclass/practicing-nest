import { PrismaService } from "@/prisma/prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class DeleteExamService {
  constructor(private client: PrismaService) {}
  async deleteExamService(id: number) {
    try {
      const existingId = this.client.exam.findUnique({
        where: { id },
      });
      if (!existingId) {
        throw new Error("id가 존재하지 않습니다. 다시 확인하세요.");
      }
      await this.client.exam.delete({
        where: {
          id,
        },
      });
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
