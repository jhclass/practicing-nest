import { Test, TestingModule } from "@nestjs/testing";
import { MovieService } from "./movie.service";
import { NotFoundException } from "@nestjs/common";
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

      // });
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });

  describe("getOne", () => {
    it("should return movie", () => {
      service.create({
        title: "testMovie",
        year: 2024,
        genres: ["test"],
      });
      const movie = service.getOne(1);
      expect(movie).toBeDefined();
      expect(movie.id).toEqual(1);
    });
    it("should throw 404 error", () => {
      try {
        service.getOne(999);
      } catch (e) {
        expect(e).toBeInstanceOf(NotFoundException); //import 필요 (NotFoundException)
      }
    });
  });
});
