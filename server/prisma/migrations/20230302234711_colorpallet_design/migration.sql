/*
  Warnings:

  - You are about to drop the `ColorPallet` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "ColorPallet";

-- CreateTable
CREATE TABLE "Design" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Design_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ColorPallete" (
    "id" SERIAL NOT NULL,
    "bgMain" TEXT NOT NULL DEFAULT '',
    "bgAlt" TEXT NOT NULL DEFAULT '',
    "palleteOne" TEXT NOT NULL DEFAULT '',
    "palleteTwo" TEXT NOT NULL DEFAULT '',
    "palleteThree" TEXT NOT NULL DEFAULT '',
    "hover" TEXT NOT NULL DEFAULT '',
    "selected" TEXT NOT NULL DEFAULT '',
    "designId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "ColorPallete_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ColorPallete" ADD CONSTRAINT "ColorPallete_designId_fkey" FOREIGN KEY ("designId") REFERENCES "Design"("id") ON DELETE CASCADE ON UPDATE CASCADE;
