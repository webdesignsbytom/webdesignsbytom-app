/*
  Warnings:

  - The primary key for the `Component` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `type` on the `Message` table. All the data in the column will be lost.
  - Added the required column `sentFromId` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `subject` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Component" DROP CONSTRAINT "Component_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Component_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Component_id_seq";

-- AlterTable
ALTER TABLE "Message" DROP COLUMN "type",
ADD COLUMN     "sentFromId" TEXT NOT NULL,
ADD COLUMN     "subject" TEXT NOT NULL;
