import { PrismaService } from "@/prisma/prisma.service";
import { Injectable } from "@nestjs/common";

@Injectable()
export class CreateExamService {
  constructor(private client: PrismaService) {}
  async createExamService(title: string, tUserId: number) {
    try {
      //
      if (!title || !tUserId) {
        throw new Error("title 과 tUserId 는 필수값 입니다.");
      }
      await this.client.exam.create({
        data: {
          title,
          tUserId,
        },
      });
      return {
        ok: true,
        message: "정상적으로 등록완료 되었습니다.",
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
