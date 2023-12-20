import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class CommentService {
  constructor(private prisma: PrismaService) {}
  async createCommentService(name: string, content: string) {
    const createdComment = await this.prisma.comment.create({
      data: {
        name,
        content,
      },
    });
    return {
      ok: true,
      message: `${createdComment.name}님이 글을 작성하였습니다.`,
    };
  }
}
