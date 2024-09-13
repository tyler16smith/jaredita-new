import { type TUpdateStudent, type TStudent } from "@/utils/types"
import { db } from "../db"

export const getStudents = async () => {
  return await db.student.findMany({
    include: { family: true },
    orderBy: { createdAt: 'desc' }
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

export const getIndividualDonationOpportunities = async () => {
  const students = await db.student.findMany({
    select: {
      id: true,
      age: true,
      // city: true,
      // country: true,
    },
    // ONLY showing the students without families. At first we don't want to separate students from within their families.
    where: {
      familyId: null
    }
  })
  return students.map(student => ({
    id: student.id,
    age: student.age,
    city: 'Bogor', // student.city,
    country: 'Indonesia', // student.country,
    cost: 15.00,
  }))
}