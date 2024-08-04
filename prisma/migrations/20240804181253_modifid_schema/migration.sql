/*
  Warnings:

  - You are about to drop the column `tUserId` on the `ExamQuestion` table. All the data in the column will be lost.
  - Added the required column `tUserId` to the `ExamAnswer` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ExamQuestion" DROP CONSTRAINT "ExamQuestion_tUserId_fkey";

-- AlterTable
ALTER TABLE "ExamAnswer" ADD COLUMN     "tUserId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ExamQuestion" DROP COLUMN "tUserId";

-- AddForeignKey
ALTER TABLE "ExamAnswer" ADD CONSTRAINT "ExamAnswer_tUserId_fkey" FOREIGN KEY ("tUserId") REFERENCES "TUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;
