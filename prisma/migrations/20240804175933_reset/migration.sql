/*
  Warnings:

  - You are about to drop the column `tUserId` on the `Exam` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Exam` table. All the data in the column will be lost.
  - You are about to drop the column `rating` on the `TUser` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Exam" DROP CONSTRAINT "Exam_tUserId_fkey";

-- AlterTable
ALTER TABLE "Exam" DROP COLUMN "tUserId",
DROP COLUMN "title";

-- AlterTable
ALTER TABLE "TUser" DROP COLUMN "rating";
