import { InputType, Field } from "@nestjs/graphql";

@InputType()
export class CreateCommentInput {
  @Field()
  name: string;
  @Field()
  content: string;
}
