import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import * as request from "supertest";
import { AppModule } from "@/app.module"; // 경로 별칭 사용

describe("CreateSurvey (e2e)", () => {
  let app: INestApplication;
  let jwtToken: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();

    // JWT 토큰 생성 또는 로그인 요청을 통해 토큰을 받아옵니다.
    const response = await request(app.getHttpServer())
      .post("/graphql")
      .send({
        query: `
          mutation {
            login(name: "이진형", password: "a123123") {
              ok
              token
            }
          }
        `,
      });

    jwtToken = response.body.data.login.token; // JWT 토큰 저장
    console.log("JWT Token:", jwtToken); // 토큰이 올바르게 출력되는지 확인
  });

  afterAll(async () => {
    await app.close();
  });

  it("/graphql (POST) createSurvey", async () => {
    const response = await request(app.getHttpServer())
      .post("/graphql")
      .send({
        query: `
          mutation {
            createSurvey(writter: "John", category: "Tech") {
              ok
              message
            }
          }
        `,
      });

    expect(response.body.data.createSurvey.ok).toBe(true);
    expect(response.body.data.createSurvey.message).toBe(
      "데이터가 정상적으로 생성되었습니다.",
    ); // 실제 응답 메시지로 수정
  });

  // GET / 요청에서 토큰을 설정함
  it("GET / (Hello World!)", () => {
    return request(app.getHttpServer()).get("/").expect(200).expect("Welcome"); // 예상 응답 메시지로 수정
  });

  // GET /api 요청에서 토큰을 설정하지 않음
  it("GET /api (어쩌구 저쩌구)", () => {
    return request(app.getHttpServer())
      .get("/api")
      .expect(200)
      .expect("어쩌구 저쩌구");
  });
});
