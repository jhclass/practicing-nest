import { AppModule } from "@/app.module";
import { INestApplication } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import * as request from "supertest";
describe("CreateExam(e2e)", () => {
  let app: INestApplication;
  let jwtToken: string;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixture.createNestApplication();
    await app.init();
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
    jwtToken = response.body.data.login.token;
    console.log(jwtToken);
  });
  afterAll(async () => {
    await app.close();
  });
  it("/graphql(post) createExam", async () => {
    const response = await request(app.getHttpServer())
      .post("/graphql")
      .set("token", `${jwtToken}`)
      .send({
        query: `
        mutation {
            createExam(title: "정기시험", subjectName: "it") {
                ok
                error
                message
            }
        }
        `,
      });
    //console.log("여기말야", response.body);
    expect(response.body.data.createExam.ok).toBe(true);
  });
<<<<<<< HEAD
  it("deleteExam(graphql)", async () => {
    const response = await request(app.getHttpServer())
      .post("/graphql")
      .set("token", `${jwtToken}`)
      .send({
        query: `
        mutation {
            deleteExam(id:29) {
                ok
                error
                message
            }
        }
        `,
      });

    console.log("삭제 되었니?", response.body);
=======
  it("/graphql(post)", async () => {
    const res = await request(app.getHttpServer())
      .post("/graphql")
      .set("token", jwtToken)
      .send({
        query: `
      mutation {
        editExam(id:1,title:"장기시험"){
          ok
          error
          message
        }
      }
      `,
      });
    console.log("바디를 보자:", res.body);
    expect(res.body.data.editExam.ok).toBe(true);
>>>>>>> f3a43f98f65a1c0e7470d06a22c8eeb96f9cd967
  });
});
