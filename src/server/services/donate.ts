import { type DonationSession } from "@/utils/types"
import { db } from "../db"

export const getDonationOpportunities = async (type: 'individual' | 'family') => {
  const donationOpportunities = await db.donation.findMany()
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
  const session = await db.donation.create({
    data: donationSession
  })
  if (!session) throw new Error('Failed to create donation session')
  return session.id
}

export const getDonationSession = async (donationSessionId: string, full?: boolean) => {
  const sessionData = await db.donation.findUnique({
    where: { id: donationSessionId },
  })
  if (!sessionData) return null
  if (full) {
    const [students, families, otherDonations] = await Promise.all([
      db.student.findMany({
        where: {
          id: {
            in: sessionData.selectedDonationIds
          }
        }
      }),
      db.family.findMany({
        where: {
          id: {
            in: sessionData.selectedDonationIds
          }
        },
      }),
      db.otherDonationOpportunity.findMany({
        where: {
          id: {
            in: sessionData.selectedDonationIds
          }
        }
      })
    ])
    return {
      ...sessionData,
      donations: [
        ...students,
        ...families,
        ...otherDonations
      ]
    }
  }
  return sessionData
}