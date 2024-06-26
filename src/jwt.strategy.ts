import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromHeader("token"), // 'token' 헤더에서 JWT 토큰을 추출
      ignoreExpiration: false,
      secretOrKey: configService.get("SECRET_KEY"), // 환경 변수에서 JWT 비밀키 가져오기
    });
  }

  async validate(payload: any) {
    return { email: payload.email, phoneNum: payload.phoneNum };
  }
}
