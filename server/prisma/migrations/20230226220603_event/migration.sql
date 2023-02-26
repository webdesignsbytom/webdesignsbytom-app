/*
  Warnings:

  - You are about to drop the column `content` on the `Event` table. All the data in the column will be lost.
  - You are about to drop the column `topic` on the `Event` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Event" DROP COLUMN "content",
DROP COLUMN "topic";
