import { PrismaService } from "@/prisma/prisma.service";
import { ResultSearchExamQuestion } from "@/schema/graphql";
import { Injectable } from "@nestjs/common";
interface ConditionsType {
  id?: number;
  examId?: number;
}
@Injectable()
export class SearchExamQuestionService {
  constructor(private readonly client: PrismaService) {}
  async searchExamQuestionServiceFunc(
    id: number,
    examId: number,
  ): Promise<ResultSearchExamQuestion> {
    try {
      if (!id || !examId) {
        throw new Error("id,examId는 필수값입니다.");
      }

      const searchConditions: ConditionsType = {};
      if (id) {
        searchConditions.id = id;
      }
      if (examId) {
        searchConditions.examId = examId;
      }

      const [result, totalCount] = await Promise.all([
        this.client.examQuestion.findMany({
          where: searchConditions,
          orderBy: { createdAt: "desc" },
        }),
        this.client.examQuestion.count({
          where: searchConditions,
        }),
      ]);
      // 날짜 타입을 문자열로 변환
      const convertedResult = result.map((item) => ({
        ...item,
        createdAt: item.createdAt.toISOString(),
        updatedAt: item.updatedAt.toISOString(),
        lastModifiedTime: item.lastModifiedTime.toISOString(),
      }));

      return {
        ok: true,
        message: "정상적으로 조회 완료 되었습니다.",
        totalCount: totalCount || 0,
        result: convertedResult || [],
      };
    } catch (error) {
      console.error(error.message);
      return {
        ok: false,
        error: error.message,
        message: `Error:${error.message}`,
        totalCount: 0,
        result: [],
      };
    }
  }
}
