/*
  Warnings:

  - Added the required column `updatedAt` to the `ExamAnswer` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ExamAnswer" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "lastModifiedByName" TEXT,
ADD COLUMN     "lastModifiedTime" TIMESTAMP(3),
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "ExamQuestion" ADD COLUMN     "fileUrl" TEXT[];
