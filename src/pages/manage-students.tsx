import React from 'react'
import { useRouter } from 'next/router'
import StudentCard from '@/components/StudentCard'
import { api } from '@/utils/api'

type ManageStudentsProps = {
  isAdmin: boolean
}

const ManageStudents = ({ isAdmin = true }: ManageStudentsProps) => {
  const router = useRouter()
  const { data: students } = api.students.getStudents.useQuery()
  console.log("STUDENTS: ", students)

  if (!isAdmin) {
    return (
      <div>
        <p>Unauthorized</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen w-full">
      <div className="flex justify-center">
        <div className="w-full max-w-[800px]">
          <div className='flex justify-between items-center gap-3'>
            <div className='flex justify-start items-center text-2xl font-bold'>
              Manage
              <select className='rounded-md bg-transparent hover:bg-gray-100 cursor-pointer px-2 py-1'>
                <option value='students'>Students</option>
                <option value='families'>Families</option>
              </select>
            </div>
            <button
              onClick={() => router.push('/add-student')}
              className='flex justify-center items-center bg-blue-500 text-white rounded-lg hover:bg-blue-600 px-3 py-2'
            >
              Add student
            </button>
          </div>
          <div className='mt-4'>
            <div className='mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {students?.map(student => (
                <StudentCard key={student.id} student={student} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ManageStudents