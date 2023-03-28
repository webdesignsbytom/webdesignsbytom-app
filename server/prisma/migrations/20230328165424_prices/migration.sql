/*
  Warnings:

  - The values [BASIC_SHOP,SINGLE_PAGE] on the enum `ProjectType` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `price` on the `Page` table. All the data in the column will be lost.

*/
-- AlterEnum
ALTER TYPE "PageType" ADD VALUE 'FULLSTACK';

-- AlterEnum
BEGIN;
CREATE TYPE "ProjectType_new" AS ENUM ('BASIC', 'SHOP', 'FULLSTACK', 'OTHER', 'CUSTOM', 'PAGE', 'TEST');
ALTER TABLE "Project" ALTER COLUMN "type" TYPE "ProjectType_new" USING ("type"::text::"ProjectType_new");
ALTER TYPE "ProjectType" RENAME TO "ProjectType_old";
ALTER TYPE "ProjectType_new" RENAME TO "ProjectType";
DROP TYPE "ProjectType_old";
COMMIT;

-- AlterTable
ALTER TABLE "Component" ADD COLUMN     "designId" TEXT,
ADD COLUMN     "projectId" TEXT;

-- AlterTable
ALTER TABLE "Page" DROP COLUMN "price",
ADD COLUMN     "designId" TEXT,
ADD COLUMN     "projectId" TEXT;

-- AddForeignKey
ALTER TABLE "Component" ADD CONSTRAINT "Component_designId_fkey" FOREIGN KEY ("designId") REFERENCES "Design"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Component" ADD CONSTRAINT "Component_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Page" ADD CONSTRAINT "Page_designId_fkey" FOREIGN KEY ("designId") REFERENCES "Design"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Page" ADD CONSTRAINT "Page_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
