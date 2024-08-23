import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { ConfigService } from "@nestjs/config";
import { PrismaService } from "./prisma/prisma.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    configService: ConfigService,
    private readonly client: PrismaService,
  ) {
    const secretKey = configService.get("SECRET_KEY");
    console.log("Loaded SECRET_KEY:", secretKey); // 비밀 키가 올바르게 로드되었는지 확인
    super({
      jwtFromRequest: ExtractJwt.fromHeader("token"),
      ignoreExpiration: false,
      secretOrKey: configService.get("SECRET_KEY"),
    });
  }

  async validate(payload: any) {
    console.log("JWT Payload:", payload); // 페이로드가 전달되는지 확인

    if (!payload) {
      throw new UnauthorizedException("Invalid token");
    }
    const thisUser = await this.client.tUser.findUnique({
      where: {
        email: payload.email,
      },
    });
    console.log("여기까지 :", thisUser);
    return thisUser;
  }
}
