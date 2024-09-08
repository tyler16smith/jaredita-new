import { toProperCase } from '@/utils/strings'
import { type TStudent } from '@/utils/types'
import { Mail, MapPin } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const StudentCard = ({ student }: { student: TStudent }) => {
  return (
    <div className="rounded-lg bg-white w-full h-auto object-cover shadow-md p-3">
      <Image
        src={student.imageUrl || ""}
        width={320}
        height={320}
        alt="Donation opportunity"
        className="rounded-lg w-full h-[200px] object-cover"
      />
      <div className="p-1">
        <p className="font-bold text-lg">
          {student.firstName + ' ' + student.lastName}
        </p>
        <div className='flex flex-col gap-2 text-sm text-gray-400'>
          <p>
            {`${toProperCase(student.gender)}, ${student.age} years old`}
          </p>
          <div className='flex justify-start items-center gap-2 mt-3'>
            <Mail size={16} className='shrink-0' />
            <p className='truncate max-w-[200px]'>
              {student.email ?? 'N/A'}
            </p>
          </div>
          <div className='flex justify-start items-center gap-2'>
            <MapPin size={16} className='shrink-0' />
            {student.fullAddress ?? 'N/A'}
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentCard