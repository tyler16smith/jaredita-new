import React, { useEffect, useRef, useState } from 'react'
import { useDonateContext } from './context/DonateProvider'
import { FadeInOutWrapper } from '../Animations'
import classNames from 'classnames'
import { api } from '@/utils/api'
import { getHeaderAndPrice } from './utils/functions'
import { ChevronDown, CircleCheck, CircleDollarSign, MapPin } from 'lucide-react'

const SponsorshipSelection = () => {
  const { donationState, handleSelectDonation } = useDonateContext()
  const [open, setOpen] = useState(false)
  const { data: donationOpportunities } = api.donate.getDonationOpportunities.useQuery(
    { type: donationState.typeSelected ?? '' },
  )
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { header, pricePerMonth } = getHeaderAndPrice(donationState)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  if (donationState.sponsorshipSelected?.type === 'orphanage') {
    return <p>Orphanage donation</p>
  }

  return (
    <div className='relative'>
      {/* Dropdown */}
      <div
        onClick={() => setOpen(!open)}
        className={classNames(
          'flex justify-between items-center gap-3 p-2 md:p-3 rounded-full',
          'bg-white border-[1px] border-gray-200 hover:shadow-md cursor-pointer',
          'transition-all duration-200',
        )}
      >
        <div className='flex justify-start items-center gap-3'>
          <div className='flex justify-center items-center w-12 h-12 bg-gray-200 rounded-full'>
            {donationState.sponsorshipSelected?.icon}
          </div>
          <div>
            <p className='font-semibold'>{header}</p>
            <p className='text-sm text-gray-400'>${pricePerMonth}/month</p>
          </div>
        </div>
        <ChevronDown size={24} className={classNames(
          'transition-transform duration-200', {
          'transform rotate-180': open
        })}
        />
      </div>

      {/* Options */}
      <FadeInOutWrapper open={open}>
        <div
          ref={dropdownRef}
          className={classNames(
            'absolute top-full mt-1 left-0 w-full bg-white border-[1px]',
            'border-gray-200 rounded-3xl p-2 md:p-3 shadow-md z-50 max-h-[300px]',
            'overflow-auto',
          )}
        >
          {/* <p>Filter</p> */}
          {donationOpportunities?.map((opportunity) => {
            const checked = donationState.donationsSelected.includes(opportunity.id)
            return (
              <div
                key={opportunity.id}
                onClick={handleSelectDonation(opportunity.id)}
                className={classNames(
                  'flex justify-start items-center gap-1 md:gap-3 p-2 rounded-2xl',
                  'bg-white hover:bg-gray-100 cursor-pointer',
                  'transition-all duration-200',
                )}
              >
                <CircleCheck
                  size={44}
                  strokeWidth={1}
                  color={checked ? 'white' : 'lightgray'}
                  fill={checked ? '#3b82f6' : 'transparent'}
                />
                <div>
                  <p className='font-semibold'>{opportunity.age} year old student</p>
                  <div className='flex justify-start items-center gap-2 md:gap-4'>
                    <div className='flex justify-start items-center gap-1 text-sm text-gray-400'>
                      <CircleDollarSign size={16} />
                      <p>${opportunity.cost}/month</p>
                    </div>
                    <div className='flex justify-start items-center gap-1 text-sm text-gray-400'>
                      <MapPin size={16} />
                      <p>{opportunity.city}, {opportunity.country}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </FadeInOutWrapper>
    </div>
  )
}

export default SponsorshipSelection