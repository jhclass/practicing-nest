/*
  Warnings:

  - A unique constraint covering the columns `[phoneNum]` on the table `TUser` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `phoneNum` to the `TUser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TUser" ADD COLUMN     "phoneNum" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "TUser_phoneNum_key" ON "TUser"("phoneNum");
