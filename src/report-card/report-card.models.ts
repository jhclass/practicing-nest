import { Field, Int, ObjectType } from "@nestjs/graphql";
@ObjectType()
export class ReportCardGQL {
  @Field(() => Int)
  id: number;

  @Field(() => Int)
  score: number;

  @Field(() => String)
  comment: string;

  @Field(() => String)
  imageUrl: string;
}
