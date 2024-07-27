-- CreateEnum
CREATE TYPE "Frequency" AS ENUM ('once', 'monthly', 'yearly');

-- CreateEnum
CREATE TYPE "DonationType" AS ENUM ('individual', 'family', 'orphanage', 'general');

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
    "donation_ids_selected" TEXT[],
    "completed_checkout" BOOLEAN NOT NULL DEFAULT false,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "donation_sessions_pkey" PRIMARY KEY ("id")
);
