/*
  Warnings:

  - Added the required column `price` to the `Component` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
ALTER TYPE "ComponentType" ADD VALUE 'PREMIUM';

-- AlterTable
ALTER TABLE "Component" ADD COLUMN     "price" INTEGER NOT NULL;
