import { PrismaService } from "@/prisma/prisma.service";
import { Injectable } from "@nestjs/common";
import { LoggedInManager } from "@/types";

@Injectable()
export class CreateExamService {
  constructor(private client: PrismaService) {}
  async createExamService(
    title: string,
    tUserId: number,
    subjectName: string,
    loggedInManager: LoggedInManager,
  ) {
    try {
      //
      if (!title || !tUserId) {
        throw new Error("title 과 tUserId 는 필수값 입니다.");
      }
      if (loggedInManager.rating === "강사") {
        throw new Error("출제자는 강사만 가능합니다. rating 을 확인하세요.");
      }
      await this.client.exam.create({
        data: {
          title,
          tUserId: loggedInManager.id,
          subjectName,
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
