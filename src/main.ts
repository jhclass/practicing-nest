import * as dotenv from "dotenv";
dotenv.config();
import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { ValidationPipe } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // dto 에 설정한 유효성 검사 실행
      forbidNonWhitelisted: true, //누군가 이상한걸 보내면 req 자체를 막아버림. ( 다만 , 이 옵션을 사용하려면 whitelist를 사용하여야 함.(true))
      transform: true, //기본적으로 string 을 가져오지만 이 속성을 쓰면 변환해줌
    }),
  );
  await app.listen(4000);
}
bootstrap();
