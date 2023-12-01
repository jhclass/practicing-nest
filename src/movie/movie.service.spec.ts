import { Test, TestingModule } from "@nestjs/testing";
import { MovieService } from "./movie.service";

describe("MovieService", () => {
  let service: MovieService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovieService],
    }).compile();

    service = module.get<MovieService>(MovieService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });

  describe("getAll", () => {
    //첫번째 배열을 실행할꺼야.
    it("should return an array", () => {
      // const list = service.create({
      //   title: "testMovie",
      //   year: 2024,
      //   genres: ["test"],
      // });
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });
});
