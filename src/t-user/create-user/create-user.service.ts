import { PrismaService } from "@/prisma/prisma.service";
import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";
export interface CreateUserDto {
  name: string;
  password: string;
  email: string;
  phoneNum: string;
}

@Injectable()
export class CreateUserService {
  constructor(private prisma: PrismaService) {}
  async createUserService(createUserDto: CreateUserDto) {
    try {
      const { name, password, email, phoneNum } = createUserDto;
      //모든필드가 존재하는지 체크
      if (!name || !password || !email || !phoneNum) {
        throw new Error("모든필드를 입력해야합니다.");
      }
      //email 과 phoneNum 이 중복되는지 체크
      const existingUser = await this.prisma.tUser.findFirst({
        where: {
          OR: [{ email }, { phoneNum }],
        },
      });
      if (existingUser) {
        throw new Error("중복된 이메일 또는 전화번호가 존재합니다.");
      }
      const salt = await bcrypt.genSalt();
      const hashedPassword = await bcrypt.hash(password, salt);
      const createUserOk = await this.prisma.tUser.create({
        data: {
          name,
          password: hashedPassword,
          email,
          phoneNum,
        },
      });
      if (createUserOk) {
        return {
          ok: true,
          message: `회원가입이 완료 되었습니다.`,
        };
      }
    } catch (error) {
      console.log(error.message);
      return {
        ok: false,
        error: `Error:${error.message}`,
      };
    }
  }
}
