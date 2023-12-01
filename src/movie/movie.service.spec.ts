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
  it("should be 4", () => {
    expect(2 + 2).toEqual(5);
  });
});
