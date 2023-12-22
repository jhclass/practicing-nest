import { Test, TestingModule } from "@nestjs/testing";
import { TUserResolver } from "./t-user.resolver";

describe("TUserResolver", () => {
  let resolver: TUserResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TUserResolver],
    }).compile();

    resolver = module.get<TUserResolver>(TUserResolver);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });
});
