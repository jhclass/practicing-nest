import { Mutation, Resolver, Args } from "@nestjs/graphql";
import { DeleteCommentService } from "@/comment/deleteComment/deleteComment.service";
@Resolver()
export class DeleteCommentResolver {
  constructor(private deleteCommentService: DeleteCommentService) {}
  @Mutation("deleteComment")
  async deleteComment(@Args("id") id: number) {
    return this.deleteCommentService.deleteCommentService(id);
  }
}
