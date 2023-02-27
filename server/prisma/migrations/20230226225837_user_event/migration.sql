-- AlterTable
ALTER TABLE "Event" ADD COLUMN     "content" TEXT,
ADD COLUMN     "createdById" INTEGER,
ADD COLUMN     "topic" TEXT;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
