import React from 'react'
import { type TFullFamily, type TFamily } from '@/utils/types'
import { Mail, MapPin, UsersRound } from 'lucide-react'
import FamilyImage from './FamilyImage'
import Image from 'next/image'
import { FadeInOutWrapper } from '../Animations'
import { EmailInput, FullAddressInput } from './Inputs'
import { useForm } from 'react-hook-form'
import { api } from '@/utils/api'
import toast from 'react-hot-toast'
import { styles } from '../Donate/AddStudent/hooks/useAddStudentForm'

const FamilyCard = ({ family, refetchFamilies, editMode }: {
  family: TFullFamily | any,
  refetchFamilies: () => void,
  editMode: boolean
}) => {
  const form = useForm({
    defaultValues: family
  })

  const update = api.families.updateFamily.useMutation({
    onSuccess: () => refetchFamilies(),
    onError: (error) => {
      console.error('Error updating family: ', error)
      toast.error('Error updating family')
    }
  })
  console.log("FAMILY: ", family)

  const handleUpdate = (key: string) => async () => {
    const updatedStudent = {
      ...form.getValues(),
      familyName: form.getValues('familyName')?.trim() ?? undefined,
      email: form.getValues('email')?.trim() ?? undefined,
      fullAddress: form.getValues('fullAddress')?.trim() ?? undefined,
      createdAt: family?.createdAt ? `${new Date(family?.createdAt).toISOString()}` : `${new Date().toISOString()}`,
      updatedAt: `${new Date().toISOString()}`,
    }
    update.mutate(updatedStudent)
  }

  return (
    <div className="rounded-lg bg-white w-full h-auto object-cover shadow-md p-3">
      <div className='flex justify-center items-center w-full h-[200px] bg-gray-200 rounded-lg'>
        <FadeInOutWrapper open={true}>
          {family?.imageUrl ? (
            <Image
              src={family.imageUrl}
              width={320}
              height={320}
              alt="Family"
              className="rounded-lg w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex justify-center items-center">
              <UsersRound size={28} color='gray' />
            </div>
          )}
        </FadeInOutWrapper>
      </div>
      <div className="p-1">
        {editMode ? (
          <input
            type='text'
            id='familyName'
            className={`font-bold text-lg w-1/2 border border-gray-300 rounded-md px-1.5 ${styles.Focus}`}
            {...form.register('familyName')}
            onBlur={handleUpdate('familyName')}
          />
        ) : (
          <p className="font-bold text-lg">
            {family.familyName}
          </p>
        )}
        <div className='flex flex-col gap-2 text-sm text-gray-400'>
          <EmailInput
            editMode={editMode}
            form={form}
            email={family?.email ?? 'N/A'}
            handleUpdate={handleUpdate}
          />
          <FullAddressInput
            editMode={editMode}
            form={form}
            fullAddress={family?.fullAddress ?? 'N/A'}
            handleUpdate={handleUpdate}
          />
        </div>
      </div>
    </div>
  )
}

export default FamilyCard