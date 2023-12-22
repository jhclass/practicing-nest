import { Module } from "@nestjs/common";
import { CommentResolver } from "@/comment/createComment/comment.resolver";
import { CommentService } from "@/comment/createComment/comment.service";
import { DeleteCommentResolver } from "@/comment/deleteComment/deleteComment.resolver";
import { DeleteCommentService } from "@/comment/deleteComment/deleteComment.service";
import { CoreModule } from "@/core.module";
@Module({
  imports: [CoreModule],
  providers: [
    CommentResolver,
    CommentService,
    DeleteCommentResolver,
    DeleteCommentService,
  ],
})
export class CommentModule {}
