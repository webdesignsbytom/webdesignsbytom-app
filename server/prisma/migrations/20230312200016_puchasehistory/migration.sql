-- AlterTable
ALTER TABLE "Design" ALTER COLUMN "name" SET DEFAULT 'untitled';

-- AlterTable
ALTER TABLE "Message" ADD COLUMN     "sentFromName" TEXT NOT NULL DEFAULT '',
ALTER COLUMN "content" SET DEFAULT '',
ALTER COLUMN "subject" SET DEFAULT 'untitled';

-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "image" TEXT;

-- CreateTable
CREATE TABLE "PuchaseHistory" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL DEFAULT '',
    "order" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "PuchaseHistory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "PuchaseHistory_userId_key" ON "PuchaseHistory"("userId");

-- AddForeignKey
ALTER TABLE "PuchaseHistory" ADD CONSTRAINT "PuchaseHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
