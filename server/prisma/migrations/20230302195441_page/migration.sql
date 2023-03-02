-- CreateEnum
CREATE TYPE "PageType" AS ENUM ('SHOP', 'BLOG', 'ADMIN', 'DEVELOPER', 'BASIC', 'PREMIUM', 'CANVAS');

-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "ComponentType" ADD VALUE 'NAVIGATION';
ALTER TYPE "ComponentType" ADD VALUE 'API';

-- CreateTable
CREATE TABLE "Page" (
    "id" SERIAL NOT NULL,
    "type" "PageType" NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "desc" TEXT NOT NULL DEFAULT '',
    "price" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Page_pkey" PRIMARY KEY ("id")
);
