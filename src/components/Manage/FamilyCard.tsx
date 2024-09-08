import React from 'react'
import { type TFamily } from '@/utils/types'
import { Mail, MapPin, UsersRound } from 'lucide-react'
import FamilyImage from './FamilyImage'
import Image from 'next/image'

const FamilyCard = ({ family, refetchFamilies, editMode }: {
  family: TFamily,
  refetchFamilies: () => void,
  editMode: boolean
}) => {
  // TODO: if editMode, show inputs and dropdowns
  return (
    <div className="rounded-lg bg-white w-full h-auto object-cover shadow-md p-3">
      <div className='flex justify-center items-center w-full h-[200px] bg-gray-200 rounded-lg'>
        {family.imageUrl ? (
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
      </div>
      <div className="p-1">
        <p className="font-bold text-lg">
          {family.familyName}
        </p>
        <div className='flex flex-col gap-2 text-sm text-gray-400'>
          <div className='flex justify-start items-center gap-2 mt-3'>
            <Mail size={16} className='shrink-0' />
            <p className='truncate max-w-[200px]'>
              {family.email ?? 'N/A'}
            </p>
          </div>
          <div className='flex justify-start items-center gap-2'>
            <MapPin size={16} className='shrink-0' />
            {family.fullAddress ?? 'N/A'}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FamilyCard