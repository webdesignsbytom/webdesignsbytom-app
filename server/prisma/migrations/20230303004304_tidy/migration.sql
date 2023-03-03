/*
  Warnings:

  - You are about to drop the `ColorPallete` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ColorPallete" DROP CONSTRAINT "ColorPallete_designId_fkey";

-- DropTable
DROP TABLE "ColorPallete";

-- CreateTable
CREATE TABLE "ColorPalette" (
    "id" SERIAL NOT NULL,
    "bgMain" TEXT NOT NULL DEFAULT '',
    "bgAlt" TEXT NOT NULL DEFAULT '',
    "paletteOne" TEXT NOT NULL DEFAULT '',
    "paletteTwo" TEXT NOT NULL DEFAULT '',
    "paletteThree" TEXT NOT NULL DEFAULT '',
    "hover" TEXT NOT NULL DEFAULT '',
    "selected" TEXT NOT NULL DEFAULT '',
    "designId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "ColorPalette_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ColorPalette" ADD CONSTRAINT "ColorPalette_designId_fkey" FOREIGN KEY ("designId") REFERENCES "Design"("id") ON DELETE CASCADE ON UPDATE CASCADE;
