import { Injectable } from "@nestjs/common";
import { PrismaService } from "@/prisma/prisma.service";

@Injectable()
export class TUserService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    try {
      const userOk = await this.prisma.tUser.findMany();
      if (userOk.length > 0) {
        return {
          ok: userOk.length > 0,
          data: userOk.length > 0 ? userOk : undefined,
        };
      } else {
        return {
          ok: false,
        };
      }
    } catch (error) {
      console.log("에러!!!!!:", error);
    }
  }
}
