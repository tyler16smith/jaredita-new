-- CreateTable
CREATE TABLE "DonationOpportunity" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DonationOpportunity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Donors" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "street" TEXT,
    "city" TEXT,
    "state" TEXT,
    "zip" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Donors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DonorDonationOpportunity" (
    "id" TEXT NOT NULL,
    "donorId" TEXT NOT NULL,
    "donationOpportunityId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DonorDonationOpportunity_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "DonorDonationOpportunity" ADD CONSTRAINT "DonorDonationOpportunity_donationOpportunityId_fkey" FOREIGN KEY ("donationOpportunityId") REFERENCES "DonationOpportunity"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DonorDonationOpportunity" ADD CONSTRAINT "DonorDonationOpportunity_donorId_fkey" FOREIGN KEY ("donorId") REFERENCES "Donors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
