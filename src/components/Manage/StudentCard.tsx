import React from 'react'
import toast from 'react-hot-toast'
import classNames from 'classnames'
import { useForm } from 'react-hook-form'
import { ChevronDown, UsersRound } from 'lucide-react'
import { toProperCase } from '@/utils/strings'
import { styles } from '../Donate/AddStudent/hooks/useAddStudentForm'
import { EmailInput, FullAddressInput, ImageInput } from './Inputs'
import { TFamily, type TFullFamily, type TFullStudent } from '@/utils/types'
import { api } from '@/utils/api'

const StudentCard = ({ student, families, refetchStudents, editMode }: {
  student: TFullStudent | any,
  families: TFullFamily[] | any,
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
      firstName: form.getValues('firstName')?.trim() ?? undefined,
      age: form.getValues('age') ? Number(form.getValues('age')) : undefined,
      email: form.getValues('email')?.trim() ?? undefined,
      fullAddress: form.getValues('fullAddress')?.trim() ?? undefined,
      familyId: form.getValues('familyId') ?? undefined,
      updatedAt: `${new Date().toISOString()}`,
      createdAt: `${new Date(student.createdAt).toISOString()}`,
    }
    update.mutate(updatedStudent)
  }

  console.log("FAMILIES: ", families)

  return (
    <div className="rounded-lg bg-white w-full h-auto object-cover shadow-md p-3">
      <ImageInput
        form={form}
        editMode={editMode}
        student={student}
        handleUpdate={handleUpdate}
      />

      {/* Name */}
      <div className="p-1">
        {editMode ? (
          <div className='flex justify-start items-center gap-1 w-fit'>
            <input
              type='text'
              id='firstName'
              className={`font-bold text-lg w-1/2 border border-gray-300 rounded-md px-1.5 ${styles.Focus}`}
              {...form.register('firstName')}
              onBlur={handleUpdate('firstName')}
            />
            <input
              type='text'
              id='lastName'
              className={`font-bold text-lg w-1/2 border border-gray-300 rounded-md px-1.5 ${styles.Focus}`}
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
                    "block appearance-none w-full bg-white border border-gray-300",
                    "py-1 pl-2 leading-tight rounded-md",
                    styles.Focus,
                  )}
                  onBlur={handleUpdate('gender')}
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
                className={`w-full border border-gray-300 rounded-md pl-1 py-[2px] w-[38px] ${styles.Focus}`}
              />
              <p className='shrink-0'>years old</p>
            </div>
          ) : (
            <p>
              {`${toProperCase(student.gender)}, ${student.age} years old`}
            </p>
          )}

          <div className='flex justify-start items-center gap-2'>
            <UsersRound size={16} className='shrink-0' />
            {editMode ? (
              <div className="relative w-full max-w-fit">
                <select
                  id="familyId"
                  {...form.register("familyId", { required: true })}
                  className={classNames(
                    "block appearance-none w-full bg-white border border-gray-300",
                    "py-1 pl-2 px-5 pr-8 leading-tight rounded-md",
                    styles.Focus,
                  )}
                  onBlur={handleUpdate('familyId')}
                >
                  <option value="">N/A</option>
                  {families?.map((family: TFullFamily) => (
                    <option key={family.id} value={family.id}>
                      {family.familyName}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronDown size={16} />
                </div>
              </div>
            ) : (
              <p>{student?.family?.familyName ? `${student?.family?.familyName} Family` : 'N/A'}</p>
            )}
          </div>
          <EmailInput
            editMode={editMode}
            form={form}
            email={student?.email ?? 'N/A'}
            handleUpdate={handleUpdate}
          />
          <FullAddressInput
            editMode={editMode}
            form={form}
            fullAddress={student?.fullAddress ?? 'N/A'}
            handleUpdate={handleUpdate}
          />
        </div>
      </div>
    </div>
  )
}

export default StudentCard