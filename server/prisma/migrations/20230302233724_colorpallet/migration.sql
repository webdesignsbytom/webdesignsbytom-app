-- CreateTable
CREATE TABLE "ColorPallet" (
    "id" SERIAL NOT NULL,
    "bgMain" TEXT NOT NULL DEFAULT '',
    "bgAlt" TEXT NOT NULL DEFAULT '',
    "palletOne" TEXT NOT NULL DEFAULT '',
    "palletTwo" TEXT NOT NULL DEFAULT '',
    "palletThree" TEXT NOT NULL DEFAULT '',
    "hover" TEXT NOT NULL DEFAULT '',
    "selected" TEXT NOT NULL DEFAULT '',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3),

    CONSTRAINT "ColorPallet_pkey" PRIMARY KEY ("id")
);
