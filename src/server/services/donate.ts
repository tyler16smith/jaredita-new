import { db } from "../db"

export const getDonationOpportunities = async () => {
  return await db.donationOpportunity.findMany()
}