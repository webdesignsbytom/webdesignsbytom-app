-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN', 'DEVELOPER');

-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('PURCHASE', 'COMPLETION', 'MESSAGE', 'OFFER', 'TEST');

-- CreateEnum
CREATE TYPE "EventType" AS ENUM ('ERROR', 'USER', 'ADMIN', 'VISITOR', 'DEVELOPER', 'TEST');

-- CreateEnum
CREATE TYPE "ComponentType" AS ENUM ('BASIC', 'SHOP', 'FULLSTACK', 'PREMIUM', 'NAVIGATION', 'API', 'TEST');

-- CreateEnum
CREATE TYPE "PageType" AS ENUM ('SHOP', 'BLOG', 'ADMIN', 'DEVELOPER', 'BASIC', 'PREMIUM', 'CANVAS', 'TEST');

-- CreateEnum
CREATE TYPE "ProjectType" AS ENUM ('BASIC', 'BASIC_SHOP', 'FULLSTACK', 'OTHER', 'CUSTOM', 'SINGLE_PAGE', 'TEST');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstName" TEXT NOT NULL DEFAULT '',
    "lastName" TEXT NOT NULL DEFAULT '',
    "country" TEXT NOT NULL DEFAULT '',
    "role" "Role" NOT NULL DEFAULT 'USER',
    "profileImage" TEXT DEFAULT 'https://www.pngfind.com/pngs/m/676-6764065_default-profile-picture-transparent-hd-png-download.png',
    "isVerified" BOOLEAN NOT NULL DEFAULT false,
    "agreedToTerms" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserVerification" (
    "id" TEXT NOT NULL,
    "uniqueString" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "UserVerification_pkey" PRIMARY KEY ("id")
);

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

-- CreateTable
CREATE TABLE "PasswordReset" (
    "id" TEXT NOT NULL,
    "uniqueString" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "PasswordReset_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Favorite" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "link" TEXT NOT NULL DEFAULT '',
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Favorite_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "type" "NotificationType" NOT NULL,
    "content" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "viewed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" TEXT NOT NULL,
    "subject" TEXT NOT NULL DEFAULT 'untitled',
    "content" TEXT NOT NULL DEFAULT '',
    "sentFromId" TEXT NOT NULL,
    "sentFromName" TEXT NOT NULL DEFAULT '',
    "userId" TEXT NOT NULL,
    "viewed" BOOLEAN NOT NULL DEFAULT false,
    "starred" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "type" "EventType" NOT NULL,
    "topic" TEXT,
    "code" INTEGER,
    "content" TEXT,
    "createdById" TEXT,
    "receivedById" TEXT,
    "viewed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Contact" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL DEFAULT '',
    "firstName" TEXT NOT NULL DEFAULT '',
    "lastName" TEXT NOT NULL DEFAULT '',
    "country" TEXT NOT NULL DEFAULT '',
    "message" TEXT NOT NULL DEFAULT '',
    "viewed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Contact_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Component" (
    "id" TEXT NOT NULL,
    "type" "ComponentType" NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "desc" TEXT NOT NULL DEFAULT '',
    "price" INTEGER NOT NULL,
    "image" TEXT NOT NULL DEFAULT 'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/09/how-to-design-a-website-21-1024x500.png',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Component_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Page" (
    "id" TEXT NOT NULL,
    "type" "PageType" NOT NULL,
    "name" TEXT NOT NULL DEFAULT '',
    "desc" TEXT NOT NULL DEFAULT '',
    "price" INTEGER NOT NULL,
    "image" TEXT NOT NULL DEFAULT 'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2018/09/how-to-design-a-website-21-1024x500.png',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Page_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL,
    "type" "ProjectType" NOT NULL,
    "name" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "ownerName" TEXT NOT NULL,
    "pagesTotal" INTEGER,
    "domainName" TEXT,
    "price" INTEGER NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Design" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL DEFAULT 'untitled',
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Design_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserStory" (
    "id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "designId" TEXT,
    "projectId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "UserStory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "colourPalette" (
    "id" TEXT NOT NULL,
    "mainBackground" TEXT DEFAULT '',
    "altBackground" TEXT DEFAULT '',
    "navBackground" TEXT DEFAULT '',
    "darkModeBackground" TEXT DEFAULT '',
    "mainText" TEXT DEFAULT '',
    "darkModeMainText" TEXT DEFAULT '',
    "altText" TEXT DEFAULT '',
    "hoverText" TEXT DEFAULT '',
    "darkModeHoverText" TEXT DEFAULT '',
    "activeText" TEXT DEFAULT '',
    "borders" TEXT DEFAULT '',
    "darkModeBorders" TEXT DEFAULT '',
    "hyperlinks" TEXT DEFAULT '',
    "projectId" TEXT,
    "designId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "colourPalette_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NavDesign" (
    "id" TEXT NOT NULL,
    "projectId" TEXT,
    "designId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "NavDesign_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "value" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    "userId" TEXT,
    "viewed" BOOLEAN NOT NULL DEFAULT false,
    "content" TEXT NOT NULL,
    "image" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Complaint" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "userId" TEXT,
    "content" TEXT NOT NULL,
    "viewed" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "Complaint_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "UserVerification_uniqueString_key" ON "UserVerification"("uniqueString");

-- CreateIndex
CREATE UNIQUE INDEX "UserVerification_userId_key" ON "UserVerification"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "PuchaseHistory_userId_key" ON "PuchaseHistory"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "PasswordReset_uniqueString_key" ON "PasswordReset"("uniqueString");

-- CreateIndex
CREATE UNIQUE INDEX "PasswordReset_userId_key" ON "PasswordReset"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Contact_email_key" ON "Contact"("email");

-- CreateIndex
CREATE UNIQUE INDEX "NavDesign_projectId_key" ON "NavDesign"("projectId");

-- CreateIndex
CREATE UNIQUE INDEX "NavDesign_designId_key" ON "NavDesign"("designId");

-- CreateIndex
CREATE UNIQUE INDEX "Review_email_key" ON "Review"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Review_userId_key" ON "Review"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Complaint_email_key" ON "Complaint"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Complaint_userId_key" ON "Complaint"("userId");

-- AddForeignKey
ALTER TABLE "UserVerification" ADD CONSTRAINT "UserVerification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PuchaseHistory" ADD CONSTRAINT "PuchaseHistory_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PasswordReset" ADD CONSTRAINT "PasswordReset_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Favorite" ADD CONSTRAINT "Favorite_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Event" ADD CONSTRAINT "Event_receivedById_fkey" FOREIGN KEY ("receivedById") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Project" ADD CONSTRAINT "Project_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Design" ADD CONSTRAINT "Design_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserStory" ADD CONSTRAINT "UserStory_designId_fkey" FOREIGN KEY ("designId") REFERENCES "Design"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserStory" ADD CONSTRAINT "UserStory_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "colourPalette" ADD CONSTRAINT "colourPalette_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "colourPalette" ADD CONSTRAINT "colourPalette_designId_fkey" FOREIGN KEY ("designId") REFERENCES "Design"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NavDesign" ADD CONSTRAINT "NavDesign_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "Project"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "NavDesign" ADD CONSTRAINT "NavDesign_designId_fkey" FOREIGN KEY ("designId") REFERENCES "Design"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Complaint" ADD CONSTRAINT "Complaint_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
