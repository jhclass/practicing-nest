import { Test, TestingModule } from "@nestjs/testing";
import { TUserService } from "./t-user.service";

describe("TUserService", () => {
  let service: TUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TUserService],
    }).compile();

    service = module.get<TUserService>(TUserService);
  });

  it("should be defined", () => {
    expect(service).toBeDefined();
  });
});
