import { PrismaService } from "@/prisma/prisma.service";
import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";
@Injectable()
export class CreateUserService {
  constructor(private prisma: PrismaService) {}
  async createUserService(name: string, password: string, email: string) {
    try {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password,salt)
      const createUserOk = await this.prisma.tUser.create({
        data: {
          name,
          password,
          email,
        },
      });
      if (createUserOk) {
        return {
          ok: true,
          message: `회원가잆이 완료 되었습니다.`,
        };
      }
    } catch (error) {
      return {
        ok: false,
        error: `Error:${error.message}`,
      };
    }
  }
}
