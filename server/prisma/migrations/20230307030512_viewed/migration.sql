/*
  Warnings:

  - The primary key for the `ColorPalette` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Complaint` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Design` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Event` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Page` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Project` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Review` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `UserStory` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterEnum
ALTER TYPE "ComponentType" ADD VALUE 'TEST';

-- AlterEnum
ALTER TYPE "EventType" ADD VALUE 'TEST';

-- AlterEnum
ALTER TYPE "NotificationType" ADD VALUE 'TEST';

-- AlterEnum
ALTER TYPE "PageType" ADD VALUE 'TEST';

-- AlterEnum
ALTER TYPE "ProjectType" ADD VALUE 'TEST';

-- DropForeignKey
ALTER TABLE "ColorPalette" DROP CONSTRAINT "ColorPalette_designId_fkey";

-- DropForeignKey
ALTER TABLE "UserStory" DROP CONSTRAINT "UserStory_projectId_fkey";

-- AlterTable
ALTER TABLE "ColorPalette" DROP CONSTRAINT "ColorPalette_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "designId" SET DATA TYPE TEXT,
ADD CONSTRAINT "ColorPalette_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ColorPalette_id_seq";

-- AlterTable
ALTER TABLE "Complaint" DROP CONSTRAINT "Complaint_pkey",
ADD COLUMN     "viewed" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Complaint_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Complaint_id_seq";

-- AlterTable
ALTER TABLE "Design" DROP CONSTRAINT "Design_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Design_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Design_id_seq";

-- AlterTable
ALTER TABLE "Event" DROP CONSTRAINT "Event_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Event_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Event_id_seq";

-- AlterTable
ALTER TABLE "Page" DROP CONSTRAINT "Page_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Page_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Page_id_seq";

-- AlterTable
ALTER TABLE "Project" DROP CONSTRAINT "Project_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Project_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Project_id_seq";

-- AlterTable
ALTER TABLE "Review" DROP CONSTRAINT "Review_pkey",
ADD COLUMN     "viewed" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Review_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Review_id_seq";

-- AlterTable
ALTER TABLE "UserStory" DROP CONSTRAINT "UserStory_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "projectId" SET DATA TYPE TEXT,
ADD CONSTRAINT "UserStory_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "UserStory_id_seq";

-- AddForeignKey
ALTER TABLE "UserStory" ADD CONSTRAINT "UserStory_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ColorPalette" ADD CONSTRAINT "ColorPalette_designId_fkey" FOREIGN KEY ("designId") REFERENCES "Design"("id") ON DELETE CASCADE ON UPDATE CASCADE;
