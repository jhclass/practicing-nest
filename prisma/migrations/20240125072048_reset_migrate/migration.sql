-- CreateTable
CREATE TABLE "ReportCard" (
    "id" SERIAL NOT NULL,
    "score" INTEGER NOT NULL,
    "comment" TEXT,
    "imageUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ReportCard_pkey" PRIMARY KEY ("id")
);
