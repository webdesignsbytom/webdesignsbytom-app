-- AlterTable
ALTER TABLE "ColorPalette" ADD COLUMN     "projectId" TEXT,
ALTER COLUMN "designId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "viewed" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "UserStory" ADD COLUMN     "designId" TEXT,
ALTER COLUMN "projectId" DROP NOT NULL;

-- CreateTable
CREATE TABLE "NavDesign" (
    "id" TEXT NOT NULL,
    "projectId" TEXT,
    "designId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "NavDesign_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "NavDesign_projectId_key" ON "NavDesign"("projectId");

-- CreateIndex
CREATE UNIQUE INDEX "NavDesign_designId_key" ON "NavDesign"("designId");

-- AddForeignKey
ALTER TABLE "UserStory" ADD CONSTRAINT "UserStory_designId_fkey" FOREIGN KEY ("designId") REFERENCES "Design"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ColorPalette" ADD CONSTRAINT "ColorPalette_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NavDesign" ADD CONSTRAINT "NavDesign_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NavDesign" ADD CONSTRAINT "NavDesign_designId_fkey" FOREIGN KEY ("designId") REFERENCES "Design"("id") ON DELETE CASCADE ON UPDATE CASCADE;
