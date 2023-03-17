/*
  Warnings:

  - You are about to drop the `ColorPalette` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ColorPalette" DROP CONSTRAINT "ColorPalette_designId_fkey";

-- DropForeignKey
ALTER TABLE "ColorPalette" DROP CONSTRAINT "ColorPalette_projectId_fkey";

-- DropTable
DROP TABLE "ColorPalette";

-- CreateTable
CREATE TABLE "colourPalette" (
    "id" TEXT NOT NULL,
    "bgMain" TEXT DEFAULT '',
    "bgAlt" TEXT DEFAULT '',
    "paletteOne" TEXT DEFAULT '',
    "paletteTwo" TEXT DEFAULT '',
    "paletteThree" TEXT DEFAULT '',
    "hover" TEXT DEFAULT '',
    "selected" TEXT DEFAULT '',
    "projectId" TEXT,
    "designId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "colourPalette_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "colourPalette" ADD CONSTRAINT "colourPalette_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "colourPalette" ADD CONSTRAINT "colourPalette_designId_fkey" FOREIGN KEY ("designId") REFERENCES "Design"("id") ON DELETE CASCADE ON UPDATE CASCADE;
