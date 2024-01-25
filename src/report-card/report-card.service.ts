import { Injectable } from "@nestjs/common";
import { PrismaService } from "@/prisma/prisma.service";
import { ReportCard } from "@prisma/client";
@Injectable()
export class ReportCardService {
  constructor(private prisma: PrismaService) {}
  async createReportCard(
    score: number,
    comment: string,
    imageUrl: string,
  ): Promise<ReportCard> {
    return this.prisma.reportCard.create({
      data: {
        score,
        comment,
        imageUrl,
      },
    });
  }
}
