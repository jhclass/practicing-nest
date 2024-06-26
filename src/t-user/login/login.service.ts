import { PrismaService } from "@/prisma/prisma.service";
import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
@Injectable()
export class LoginService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}
  async validateUser(name: string, password: string) {
    const existingUser = await this.prisma.tUser.findFirst({
      where: { name },
    });
    if (!existingUser) {
      return {
        ok: false,
        message: `아이디가 존재하지 않습니다.`,
      };
    }
    //비밀번호 검증로직 추가
    //bycrypt compare
    const passwordOk = await bcrypt.compare(password, existingUser.password);
    if (!passwordOk) {
      return {
        ok: false,
        message: `비밀번호가 일치하지 않습니다.`,
      };
    }
    // jwt 토큰생성
    const payload = {
      email: existingUser.email,
      phoneNum: existingUser.phoneNum,
    };

    const token = this.jwtService.sign(payload);
    return {
      ok: true,
      token: token,
    };
  }
}
