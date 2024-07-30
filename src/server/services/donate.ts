import { type DonationSession } from "@/utils/types"
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

export const createDonationSession = async (donationSession: DonationSession) => {
  const session = await db.donationSession.create({
    data: donationSession
  })
  if (!session) throw new Error('Failed to create donation session')
  return session.id
}

export const getDonationSession = async (donationSessionId: string) => {
  const sessionData = await db.donationSession.findUnique({
    where: { id: donationSessionId }
  })
  return sessionData
}