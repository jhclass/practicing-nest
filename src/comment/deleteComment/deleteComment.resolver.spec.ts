import { Test, TestingModule } from "@nestjs/testing";
import { DeleteCommentResolver } from "@/comment/deleteComment/deleteComment.resolver";

describe("DeleteCommentResolver", () => {
  let resolver: DeleteCommentResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeleteCommentResolver],
    }).compile();

    resolver = module.get<DeleteCommentResolver>(DeleteCommentResolver);
  });

  it("should be defined", () => {
    expect(resolver).toBeDefined();
  });
});
