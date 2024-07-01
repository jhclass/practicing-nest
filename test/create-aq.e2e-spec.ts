import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import * as request from "supertest";
import { AppModule } from "@/app.module";

describe("CreateAq(e2e)", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });
  afterAll(async () => {
    await app.close();
  });

  it("/graphql (post) createAQ", async () => {
    const res = await request(app.getHttpServer())
      .post("/graphql")
      .send({
        query: `
        mutation {
            createAQ(surveyId:${Number(
              1,
            )},question:"가장좋아하는 음식은?",answer:"치킨"){
                    ok
                    error
                    message
                }
            }
        `,
      });

    console.log("Status Code:", res.status);

    // 응답 본문 출력
    console.log("Response Body:", JSON.stringify(res.body, null, 2));
    expect(res.body.data.createAQ.ok).toBe(true);
    expect(res.body.data.createAQ.message).toBe(
      "정상적으로 데이터가 생성 되었습니다.",
    );
  });
});
