import { type TFamily, type TFullFamily } from "@/utils/types"
import { db } from "../db"

export const getFamilies = async () => {
  return await db.family.findMany()
}

export const addFamily = async (newFamily: TFamily) => {
  return await db.family.create({ data: newFamily })
}

export const updateFamily = async (updatedFamily: TFullFamily) => {
  return await db.family.update({
    where: { id: updatedFamily.id },
    data: updatedFamily
  })
}

export const getFamilyDonationOpportunities = async () => {
  const families = await db.family.findMany({
    include: { students: true }
  })
  return families
    .filter(family => family.students.length > 0)
    .map(family => ({
      id: family.id,
      name: family.familyName,
      numberOfStudents: family.students.length,
      city: 'Bogor', // family.city,
      country: 'Indonesia', // family.country,
      cost: family.students.length * 15.00,
    }))
}