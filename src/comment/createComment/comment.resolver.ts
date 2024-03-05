import { Mutation, Resolver, Args, Query } from "@nestjs/graphql";
import { CommentService } from "@/comment/createComment/comment.service";

@Resolver()
export class CommentResolver {
  constructor(private commentR: CommentService) {}
  @Mutation("createComment")
  async createComment(
    @Args("name") name: string,
    @Args("password") password: string,
    @Args("content") content: string,
  ) {
    return this.commentR.createCommentService(name, password, content);
  }
  @Mutation("updateComment")
  async updateComment(
    @Args("id") id: number,
    @Args("name") name: string,
    @Args("password") password: string,
    @Args("content") content: string,
  ) {
    return this.commentR.updateCommentService(id, name, password, content);
  }
  @Query("seeComment")
  async seeComment(@Args("page") page: number, @Args("limit") limit: number) {
    return this.commentR.seeCommentService(page, limit);
  }
}
