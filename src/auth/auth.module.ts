import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { Module } from "@nestjs/common";
import { AuthController } from "@/auth/auth.controller";

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: "jwt" }),
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: "14d" },
    }),
  ],
  controllers: [AuthController],
})
export class AuthModule {}
