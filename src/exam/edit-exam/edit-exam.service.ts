import { Injectable } from "@nestjs/common";
import { PrismaService } from "@/prisma/prisma.service";
interface LoggedInManager {
  id: number;
  name: string;
  email: string;
  phoneNum: string;
  rating: string;
  createdAt: string;
  updatedAt: string;
}
@Injectable()
export class EditExamService {
  constructor(private client: PrismaService) {}
  async editExamService(
    id: number,
    title: string,
    subjectName: string,
    loggedInManager: LoggedInManager,
  ) {
    try {
      //id
      if (!id) {
        throw new Error("id 는 필수값 입니다.");
      }
      const isMe = loggedInManager.id;
      const existingId = await this.client.exam.findUnique({
        where: {
          id,
        },
      });

      if (!existingId) {
        throw new Error("id가 존재하지 않습니다.");
      }
      if (existingId.tUserId !== isMe) {
        throw new Error("출제자 id 와 현재 수정하려는 id 가 같지 않습니다. ");
      }
      await this.client.exam.update({
        where: {
          id,
        },
        data: {
          title,
          subjectName,
        },
      });
      return { ok: true, message: "정상적으로 수정완료 되었습니다." };
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
