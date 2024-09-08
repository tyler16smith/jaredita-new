import { type TStudent } from "@/utils/types"
import { db } from "../db"

export const getStudents = async () => {
  return await db.student.findMany()
}

export const addStudent = async (newStudent: TStudent) => {
  return await db.student.create({ data: newStudent })
}