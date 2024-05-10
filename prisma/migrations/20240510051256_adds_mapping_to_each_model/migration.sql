/*
  Warnings:

  - You are about to drop the `DonationOpportunity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `DonorDonationOpportunity` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Donors` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "DonorDonationOpportunity" DROP CONSTRAINT "DonorDonationOpportunity_donationOpportunityId_fkey";

-- DropForeignKey
ALTER TABLE "DonorDonationOpportunity" DROP CONSTRAINT "DonorDonationOpportunity_donorId_fkey";

-- DropTable
DROP TABLE "DonationOpportunity";

-- DropTable
DROP TABLE "DonorDonationOpportunity";

-- DropTable
DROP TABLE "Donors";

-- CreateTable
CREATE TABLE "donation_opportunities" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "donation_opportunities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "donors" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "street" TEXT,
    "city" TEXT,
    "state" TEXT,
    "zip" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "donors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "donor_donation_opportunities" (
    "id" TEXT NOT NULL,
    "donorId" TEXT NOT NULL,
    "donationOpportunityId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "donor_donation_opportunities_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "donor_donation_opportunities" ADD CONSTRAINT "donor_donation_opportunities_donationOpportunityId_fkey" FOREIGN KEY ("donationOpportunityId") REFERENCES "donation_opportunities"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "donor_donation_opportunities" ADD CONSTRAINT "donor_donation_opportunities_donorId_fkey" FOREIGN KEY ("donorId") REFERENCES "donors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
