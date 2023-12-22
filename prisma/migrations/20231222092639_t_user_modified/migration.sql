/*
  Warnings:

  - Added the required column `password` to the `TUser` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TUser" ADD COLUMN     "password" INTEGER NOT NULL;
