import { DonateProvider } from '@/components/Donate/context/DonateProvider'
import { Dot } from 'lucide-react'
import React from 'react'

const Donate = () => {
  return (
    <div className='flex justify-center items-center w-full'>
      <div className='w-full max-w-[1000px] flex flex-col justify-center items-center mt-3'>
        <div className='flex items-center bg-gray-200 border-[1px] border-gray-400 w-fit rounded-full pl-0.5 pr-3 py-0.5 text-sm'>
          <Dot size={28} />
          <p>Donate</p>
        </div>

        <div className='max-w-[535px] text-center'>
          <p className='font-medium mt-5 text-5xl leading-[63px]'>Sponsor a child for $15/month</p>
          <p className='mt-6 mb-10'>See below to learn more about our three donation options of sponsoring an individual, family, or orphanage</p>
        </div>
      </div>
    </div>
  )
}

const DonatePage = () => {
  return (
    <DonateProvider>
      <Donate />
    </DonateProvider>
  )
}

export default DonatePage