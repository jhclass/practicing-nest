/*
  Warnings:

  - Added the required column `tUserId` to the `Exam` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Exam` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Exam" ADD COLUMN     "tUserId" INTEGER NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "TUser" ADD COLUMN     "rating" TEXT;

-- AddForeignKey
ALTER TABLE "Exam" ADD CONSTRAINT "Exam_tUserId_fkey" FOREIGN KEY ("tUserId") REFERENCES "TUser"("id") ON DELETE CASCADE ON UPDATE CASCADE;
