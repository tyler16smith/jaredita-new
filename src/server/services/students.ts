import { type TUpdateStudent, type TStudent } from "@/utils/types"
import { db } from "../db"

export const getStudents = async () => {
  return await db.student.findMany({
    orderBy: {
      createdAt: 'desc'
    }
  })
}

export const addStudent = async (newStudent: TStudent) => {
  return await db.student.create({ data: newStudent })
}

export const updateStudent = async (updatedStudent: TUpdateStudent) => {
  return await db.student.update({
    where: { id: updatedStudent.id },
    data: updatedStudent
  })
}