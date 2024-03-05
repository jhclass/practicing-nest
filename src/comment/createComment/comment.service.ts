import { Injectable } from "@nestjs/common";
import { PrismaService } from "@/prisma/prisma.service";
import * as bcrypt from "bcrypt";

@Injectable()
export class CommentService {
  constructor(private prisma: PrismaService) {}
  async createCommentService(name: string, password: string, content: string) {
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const createdComment = await this.prisma.comment.create({
      data: {
        name,
        content,
        password: hashedPassword,
      },
    });
    return {
      ok: true,
      message: `${createdComment.name}님이 글을 작성하였습니다.`,
    };
  }
  async updateCommentService(
    id: number,
    name: string,
    password: string,
    content: string,
  ) {
    try {
      const checkId = await this.prisma.comment.findUnique({
        where: {
          id,
        },
      });
      if (!checkId) {
        throw new Error("아이디가 존재하지 않습니다");
      }
      //비밀번호 일치 여부 확인
      const isPasswordMatch = await bcrypt.compare(password, checkId.password);
      if (!isPasswordMatch) {
        throw new Error("비밀번호가 일치하지 않습니다.");
      }
      await this.prisma.comment.update({
        where: {
          id,
        },
        data: {
          name,
          content,
        },
      });

      return {
        ok: true,
        message: `${id} 번 게시물 변경되었습니다`,
      };
    } catch (error) {
      console.error(error.message);
      return {
        ok: false,
        message: "에러발생. 하단 에러메세지를 확인하세요.",
        error: `Error:${error.message}`,
      };
    }
  }
  async seeCommentService(page: number, limit: number) {
    try {
      const pageNum = page || 1;
      const take = limit || 10;
      const [commentData, commentCount] = await Promise.all([
        this.prisma.comment.findMany({
          take,
          skip: (pageNum - 1) * take,
          orderBy: {
            createdAt: "desc",
          },
        }),
        this.prisma.comment.count(),
      ]);
      return {
        ok: true,
        message: "데이터가 정상적으로 출력되었습니다",
        data: commentData || "",
        totalCount: commentCount || 0,
      };
    } catch (error) {
      console.error(error.message);
      return {
        ok: false,
        message: "에러발생. 에러메세지를 확인하세요.",
        error: `Error:${error.message}`,
      };
    }
  }
}
