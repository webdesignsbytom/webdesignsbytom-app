-- CreateEnum
CREATE TYPE "ComponentType" AS ENUM ('BASIC', 'SHOP', 'FULLSTACK');

-- CreateTable
CREATE TABLE "Component" (
    "id" SERIAL NOT NULL,
    "type" "EventType" NOT NULL,
    "name" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "mainImage" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Component_pkey" PRIMARY KEY ("id")
);
