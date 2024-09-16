/*
  Warnings:

  - You are about to drop the `donation_sessions` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `city` to the `families` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `families` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image_url` to the `families` table without a default value. This is not possible if the table is not empty.
  - Made the column `full_address` on table `families` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `city` to the `students` table without a default value. This is not possible if the table is not empty.
  - Added the required column `country` to the `students` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "donor_donations" DROP CONSTRAINT "donor_donations_donationId_fkey";

-- AlterTable
ALTER TABLE "donor_donations" ADD COLUMN     "donationSessionId" TEXT;

-- AlterTable
ALTER TABLE "families" ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "donationSessionId" TEXT,
ADD COLUMN     "image_url" TEXT NOT NULL,
ALTER COLUMN "full_address" SET NOT NULL;

-- AlterTable
ALTER TABLE "other_donation_opportunities" ADD COLUMN     "donationSessionId" TEXT;

-- AlterTable
ALTER TABLE "students" ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "country" TEXT NOT NULL,
ADD COLUMN     "donationSessionId" TEXT;

-- DropTable
DROP TABLE "donation_sessions";

-- CreateTable
CREATE TABLE "donations" (
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

    CONSTRAINT "donations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "donor_donations" ADD CONSTRAINT "donor_donations_donationId_fkey" FOREIGN KEY ("donationId") REFERENCES "donations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
