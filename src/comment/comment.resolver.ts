import { Mutation, Resolver, Args } from "@nestjs/graphql";
import { CommentService } from "./comment.service";

@Resolver()
export class CommentResolver {
  constructor(private commentR: CommentService) {}
  @Mutation("createComment")
  async createComment(
    @Args("name") name: string,
    @Args("content") content: string,
  ) {
    return this.commentR.createCommentService(name, content);
  }
}
