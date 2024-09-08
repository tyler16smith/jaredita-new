import React, { useState } from 'react'
import { useRouter } from 'next/router'
import StudentCard from '@/components/Manage/StudentCard'
import { api } from '@/utils/api'
import { Check, Pencil, Plus } from 'lucide-react'
import FamilyCard from '@/components/Manage/FamilyCard'
import { FadeInOutWrapper } from '@/components/Animations'

type ManageStudentsProps = {
  isAdmin: boolean
}

// TODO: Implement isAdmin check when we have authentication in the app
const ManageStudents = ({ isAdmin = true }: ManageStudentsProps) => {
  const router = useRouter()
  const [editMode, setEditMode] = useState(false)
  const [manage, setManage] = useState<'students' | 'families'>('students')

  const {
    data: students,
    refetch: refetchStudents
  } = api.students.getStudents.useQuery(undefined, {
    enabled: isAdmin && manage === 'students'
  })

  const {
    data: families,
    refetch: refetchFamilies
  } = api.families.getFamilies.useQuery(undefined, {
    enabled: isAdmin && manage === 'families'
  })

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
              <select
                value={manage}
                onChange={e => setManage(e.target.value as 'students' | 'families')}
                className='rounded-md bg-transparent hover:bg-gray-100 cursor-pointer px-2 py-1 outline-none transition-all duration-200'
              >
                <option value='students'>Students</option>
                <option value='families'>Families</option>
              </select>
            </div>
            <div className='flex justify-end items-center gap-3'>
              {editMode ? (
                <button
                  onClick={() => setEditMode(false)}
                  className='flex justify-center items-center gap-2 text-green-600 border border-green-600 rounded-lg bg-green-100 hover:bg-green-200 px-3 py-2 transition-all duration-200'
                >
                  <Check size={16} className='shrink-0' />
                  Done Editting
                </button>
              ) : (
                <button
                  onClick={() => setEditMode(true)}
                  className='flex justify-center items-center gap-2 text-black rounded-lg border border-transparent hover:bg-gray-200 px-3 py-2 transition-all duration-200'
                >
                  <Pencil size={16} className='shrink-0' />
                  Edit
                </button>
              )}
              <button
                onClick={() => router.push('/add-student')}
                className='flex justify-center items-center gap-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 px-3 py-2 transition-all duration-200'
              >
                <Plus size={16} className='shrink-0' />
                Add
              </button>
            </div>
          </div>

          <div className='mt-8'>
            <div className='mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
              {manage === 'families' && (
                families === undefined ? (
                  <LoadingCards />
                ) : (
                  families?.map(family => (
                    <FadeInOutWrapper key={family.id} open={true}>
                      <FamilyCard
                        family={family}
                        refetchFamilies={refetchFamilies}
                        editMode={editMode}
                      />
                    </FadeInOutWrapper>
                  ))
                )
              )}
              {manage === 'students' && (
                students === undefined ? (
                  <LoadingCards />
                ) : (
                  students?.map(student => (
                    <FadeInOutWrapper key={student.id} open={true}>
                      <StudentCard
                        student={student}
                        refetchStudents={refetchStudents}
                        editMode={editMode}
                      />
                    </FadeInOutWrapper>
                  ))
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const LoadingCards = () => (
  <>
    {[1, 2, 3].map(i => (
      <div
        key={i}
        className="rounded-lg bg-white w-full h-auto object-cover shadow-md p-3 animate-pulse"
      >
        <div className="h-[200px] w-full bg-gray-200 rounded-lg" />
        <div className="flex flex-col gap-2 py-1 mt-2">
          <div className="h-5 bg-gray-200 rounded w-3/5" />
          <div className="h-4 bg-gray-200 rounded w-3/4" />
          <div className="h-4 bg-gray-200 rounded w-3/4 mt-4" />
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-full" />
        </div>
      </div>
    ))}
  </>
)

export default ManageStudents