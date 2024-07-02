import { db } from "../db"

export const getDonationOpportunities = async (type: 'individual' | 'family') => {
  const donationOpportunities = await db.donationOpportunity.findMany()
  if (!donationOpportunities) return null
  if (type === 'individual') {
    return donationOpportunities
  }
  // if (type === 'family') {
  //   const groupedByFamilies = donationOpportunities?.reduce((acc, curr) => {
  //     if (curr.type === 'family') {
  //       if (!acc[curr.familyId]) {
  //         acc[curr.familyId] = []
  //       }
  //       acc[curr.familyId].push(curr)
  //     }
  //     return acc
  //   }, {} as Record<string, typeof donationOpportunities>)
    
  //   return groupedByFamilies
  // }
}