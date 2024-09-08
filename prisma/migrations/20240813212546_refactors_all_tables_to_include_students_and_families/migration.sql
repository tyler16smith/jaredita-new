-- CreateEnum
CREATE TYPE "Frequency" AS ENUM ('once', 'monthly', 'yearly');

-- CreateEnum
CREATE TYPE "DonationType" AS ENUM ('student', 'family', 'orphanage', 'general');

-- CreateEnum
CREATE TYPE "OtherDonationType" AS ENUM ('orphanage', 'general');

-- CreateTable
CREATE TABLE "students" (
    "id" TEXT NOT NULL,
    "first_name" TEXT NOT NULL,
    "last_name" TEXT,
    "age" INTEGER NOT NULL,
    "gender" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "email" TEXT,
    "full_address" TEXT,
    "family_id" TEXT,
    "grade_level" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "families" (
    "id" TEXT NOT NULL,
    "family_name" TEXT NOT NULL,
    "email" TEXT,
    "full_address" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "families_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "other_donation_opportunities" (
    "id" TEXT NOT NULL,
    "type" "OtherDonationType" NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "other_donation_opportunities_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "donation_sessions" (
    "id" TEXT NOT NULL,
    "type" "DonationType" NOT NULL,
    "frequency" "Frequency" NOT NULL,
    "quantity" INTEGER NOT NULL,
    "cover_transaction_fee" BOOLEAN NOT NULL DEFAULT false,
    "amount" INTEGER NOT NULL,
    "first_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "selected_donation_ids" TEXT[],
    "completed_checkout" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "donation_sessions_pkey" PRIMARY KEY ("id")
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
CREATE TABLE "donor_donations" (
    "id" TEXT NOT NULL,
    "donorId" TEXT NOT NULL,
    "donationId" TEXT NOT NULL,
    "type" "DonationType" NOT NULL,
    "amount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "donor_donations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_family_id_fkey" FOREIGN KEY ("family_id") REFERENCES "families"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "donor_donations" ADD CONSTRAINT "donor_donations_donationId_fkey" FOREIGN KEY ("donationId") REFERENCES "donation_sessions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "donor_donations" ADD CONSTRAINT "donor_donations_donorId_fkey" FOREIGN KEY ("donorId") REFERENCES "donors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
