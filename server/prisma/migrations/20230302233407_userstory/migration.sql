-- CreateTable
CREATE TABLE "UserStory" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,
    "projectId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "UserStory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserStory" ADD CONSTRAINT "UserStory_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;
