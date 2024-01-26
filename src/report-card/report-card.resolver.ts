import { Resolver, Mutation, Args } from "@nestjs/graphql";
import { ReportCardService } from "@/report-card/report-card.service";
import { ImageService } from "./image.service";
import { ReportCardGQL } from "./report-card.models";

@Resolver()
export class ReportCardResolver {
  constructor(
    private readonly reportCardService: ReportCardService,
    private readonly imageService: ImageService,
  ) {}

  @Mutation(() => String)
  async getSignedUploadUrl(@Args("fileName") fileName: string) {
    return this.imageService.getSignedUploadUrl(fileName);
  }

  @Mutation(() => ReportCardGQL)
  async createReportCard(
    @Args("score") score: number,
    @Args("comment") comment: string,
    @Args("imageUrl") imageUrl: string,
  ) {
    return this.reportCardService.createReportCard(score, comment, imageUrl);
  }
}
