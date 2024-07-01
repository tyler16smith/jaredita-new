import React from 'react'
import { DonateProvider, useDonateContext } from '@/components/Donate/context/DonateProvider'
import SponsorDonateToggle from '@/components/Donate/SponsorDonateToggle'
import { Dot, Home, UserRound, UsersRound } from 'lucide-react'
import SponsorshipOption from '@/components/Donate/SponsorshipOption'
import { SponsorshipType, TSponsorshipOption } from '@/utils/types'
import SponsorshipSelection from '@/components/Donate/SponsorshipSelection'

export const sponsorshipOptions: TSponsorshipOption[] = [
  {
    id: 'individual-sponsorship',
    title: 'Individual',
    type: 'individual',
    description: 'Sponsor an individual student for $15 per month',
    icon: <UserRound size={20} />,
    highlight: false,
    coverImage: 'https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_640.jpg',
    content: <p>Individual sponsorship content</p>
  },
  {
    id: 'family-sponsorship',
    title: 'Family',
    type: 'family',
    description: 'Sponsor a family for $15 per student per month',
    icon: <UsersRound size={20} />,
    highlight: true,
    coverImage: 'https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_640.jpg',
    content: <p>Family sponsorship content</p>
  },
  {
    id: 'orphanage-sponsorship',
    title: 'Orphanage',
    type: 'orphanage',
    description: 'Sponsor the Bina Kasih Orphanage with a one-time or monthly donation',
    icon: <Home size={20} />,
    highlight: false,
    coverImage: 'https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_640.jpg',
    content: <p>Family sponsorship content</p>
  }
]

const Donate = () => {
  const { donationState } = useDonateContext()
  console.log("SPONSORSHIP: ", donationState.sponsorshipSelected)

  return (
    <div className='flex justify-center items-center w-full pb-20'>
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

        {/* Donation selection */}
        {donationState.sponsorshipSelected && (
          <div className='flex flex-col justify-center items-center mt-16 w-full'>
            <div className='flex flex-col gap-3 w-full max-w-[475px]'>
              <p className='uppercase text-sm font-semibold text-gray-500'>
                Select {donationState.sponsorshipSelected.type === 'individual' ? 'students' : 'families'} to sponsor
              </p>
              <SponsorshipSelection />
            </div>
          </div>
        )}

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