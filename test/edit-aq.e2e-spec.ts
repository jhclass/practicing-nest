import { Test, TestingModule } from "@nestjs/testing";
import { INestApplication } from "@nestjs/common";
import * as request from "supertest";
import { AppModule } from "@/app.module";

describe("EditAQ (e2e)", () => {
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
  it("/graphql (post) editAQ", async () => {
    const query = `
    mutation($id:Int!,$question:String){
        editAQ(id:$id,question:$question){
            ok
            message
            error
        }
    }
    `;
    const variables = {
      id: 1,
      question: "싫어하는거?",
    };
    const res = await request(app.getHttpServer())
      .post("/graphql")
      .send({ query, variables });
    console.log(res.body.data.editAQ.ok);
    expect(res.status).toBe(200);
    expect(res.body).not.toBeNull();
    expect(res.body.data.editAQ.ok).toBe(true);
  });
});
