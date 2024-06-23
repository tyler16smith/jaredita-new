import React from 'react'
import { DonateProvider } from '@/components/Donate/context/DonateProvider'
import SponsorDonateToggle from '@/components/Donate/SponsorDonateToggle'
import { Dot, Home, UserRound, UsersRound } from 'lucide-react'
import SponsorshipOption from '@/components/Donate/SponsorshipOption'

export type TSponsorshipOption = {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  highlight: boolean
}
export const sponsorshipOptions: TSponsorshipOption[] = [
  {
    id: 'individual-sponsorship',
    title: 'Individual',
    description: 'Sponsor an individual student for $15 per month',
    icon: <UserRound size={20} />,
    highlight: false,
  },
  {
    id: 'family-sponsorship',
    title: 'Family',
    description: 'Sponsor a family for $15 per student per month',
    icon: <UsersRound size={20} />,
    highlight: true,
  },
  {
    id: 'orphanage-sponsorship',
    title: 'Orphanage',
    description: 'Sponsor the Bina Kasih Orphanage with a one-time or monthly donation',
    icon: <Home size={20} />,
    highlight: false,
  }
]

const Donate = () => {
  return (
    <div className='flex justify-center items-center w-full'>
      <div className='w-full max-w-[1000px] flex flex-col justify-center items-center mt-3'>
        <div className='flex items-center bg-gray-200 border-[1px] border-gray-400 w-fit rounded-full pl-0.5 pr-3 py-0.5 text-sm'>
          <Dot size={28} />
          <p>Donate</p>
        </div>

        {/* Header */}
        <div className='flex flex-col justify-center items-center max-w-[535px] text-center'>
          <p className='font-medium mt-5 text-5xl leading-[63px]'>Sponsor a child for $15/month</p>
          <p className='mt-6 mb-10'>See below to learn more about our three donation options of sponsoring an individual, family, or orphanage</p>
          <SponsorDonateToggle />
        </div>

        {/* Sponsorship Options */}
        <div className='md:flex justify-center items-center gap-3 mt-16'>
          {sponsorshipOptions.map((option) => (
            <div key={option.id} className='w-full'>
              <SponsorshipOption option={option} />
            </div>
          ))}
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