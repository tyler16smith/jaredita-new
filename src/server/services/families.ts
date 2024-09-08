import { db } from "../db"

export const getFamilies = async () => {
  return await db.family.findMany()
}

export const addFamily = async (newFamily: any) => {
  return await db.family.create({ data: newFamily })
}