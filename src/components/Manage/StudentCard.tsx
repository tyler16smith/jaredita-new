import React from 'react'
import Image from 'next/image'
import { toProperCase } from '@/utils/strings'
import { type TFullStudent, type TStudent } from '@/utils/types'
import { ChevronDown, Mail, MapPin, RefreshCcw } from 'lucide-react'
import { api } from '@/utils/api'
import toast from 'react-hot-toast'
import classNames from 'classnames'
import { FadeInOutWrapper } from '../Animations'
import { useForm } from 'react-hook-form'
import { styles } from '../Donate/AddStudent/hooks/useAddStudentForm'

const StudentCard = ({ student, refetchStudents, editMode }: {
  student: TFullStudent,
  refetchStudents: () => void,
  editMode: boolean
}) => {
  const form = useForm({
    defaultValues: student
  })
  const update = api.students.updateStudent.useMutation({
    onSuccess: () => refetchStudents(),
    onError: (error) => {
      console.error('Error updating student: ', error)
      toast.error('Error updating student')
    }
  })

  const handleUpdate = (key: string) => async () => {
    const updatedStudent = {
      ...form.getValues(),
      updatedAt: new Date().toISOString()
    }
    update.mutate(updatedStudent)
  }

  return (
    <div className="rounded-lg bg-white w-full h-auto object-cover shadow-md p-3">

      {/* Image */}
      <div className='relative'>
        <Image
          src={student.imageUrl || ""}
          width={320}
          height={320}
          alt="Donation opportunity"
          className="rounded-lg w-full h-[200px] object-cover"
        />
        <FadeInOutWrapper open={editMode}>
          <button
            // onClick={handleUpdateImage}
            className={classNames(
              'absolute flex flex-col justify-center items-center gap-3',
              'bg-opacity-80 hover:bg-opacity-90 top-1/2 left-1/2 transform',
              '-translate-x-1/2 -translate-y-1/2 bg-gray-800 w-full h-full',
              'rounded-lg p-2 text-white text-sm transition-all duration-200',
            )}
          >
            <RefreshCcw size={24} className='shrink-0' />
            Change image
          </button>
        </FadeInOutWrapper>
      </div>

      {/* Name */}
      <div className="p-1">
        {editMode ? (
          <div className='flex justify-start items-center gap-1 w-fit'>
            <input
              type='text'
              id='firstName'
              className='font-bold text-lg w-1/2 border border-gray-300 rounded-md px-1.5'
              {...form.register('firstName')}
              onBlur={handleUpdate('firstName')}
            />
            <input
              type='text'
              id='lastName'
              className='font-bold text-lg w-1/2 border border-gray-300 rounded-md px-1.5'
              {...form.register('lastName')}
              onBlur={handleUpdate('lastName')}
            />
          </div>
        ) : (
          <p className="font-bold text-lg">
            {student.firstName + ' ' + student.lastName}
          </p>
        )}

        <div className='flex flex-col gap-2 text-sm text-gray-400'>

          {/* Gender and age */}
          {editMode ? (
            <div className="flex justify-start items-center gap-2 w-full">
              <div className="relative w-full max-w-20">
                <select
                  id="gender"
                  {...form.register("gender", { required: true })}
                  className={classNames(
                    "block appearance-none w-full bg-white border border-gray-300 rounded-md",
                    "py-1 pl-2 leading-tight focus:outline-none focus:border-blue-500",
                    "focus:ring focus:ring-blue-300 focus:ring-opacity-50",
                  )}
                >
                  <option value="">Select One</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronDown size={16} />
                </div>
              </div>
              <input
                type="number"
                id="age"
                {...form.register("age", { required: true })}
                placeholder="Ex: 15"
                className='w-full border border-gray-300 rounded-md pl-1 py-[2px] w-[38px]'
              />
              <p>years old</p>
            </div>
          ) : (
            <p>
              {`${toProperCase(student.gender)}, ${student.age} years old`}
            </p>
          )}

          <div className='flex justify-start items-center gap-2 mt-3'>
            <Mail size={16} className='shrink-0' />
            {editMode ? (
              <input
                type='email'
                id='email'
                className='w-full border border-gray-300 rounded-md px-1.5 -ml-0.5'
                {...form.register('email')}
                onBlur={handleUpdate('email')}
              />
            ) : (
              <p className='truncate max-w-[200px]'>
                {student.email ?? 'N/A'}
              </p>
            )}
          </div>

          <div className='flex justify-start items-center gap-2'>
            <MapPin size={16} className='shrink-0' />
            {editMode ? (
              <input
                type='text'
                id='fullAddress'
                className='w-full border border-gray-300 rounded-md px-1.5 -ml-0.5'
                {...form.register('fullAddress')}
                onBlur={handleUpdate('fullAddress')}
              />
            ) : (
              <p>{student.fullAddress ?? 'N/A'}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentCard