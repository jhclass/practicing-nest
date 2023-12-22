import { Injectable } from "@nestjs/common";
import { PrismaService } from "@/prisma/prisma.service";

@Injectable()
export class DeleteCommentService {
  constructor(private prisma: PrismaService) {}
  async deleteCommentService(id: number) {
    //console.log(id);
    try {
      const deleteCommentOk = await this.prisma.comment.delete({
        where: {
          id: id,
        },
      });
      console.log(deleteCommentOk);
      if (deleteCommentOk) {
        return {
          ok: true,
          message: `${id} 번 코멘트가 삭제되었습니다.`,
        };
      } else {
        return {
          ok: false,
          message: `404 Not Found`,
        };
      }
    } catch (error) {
      return {
        ok: false,
        message: `500 Internal Server Error`,
      };
    }
  }
}
