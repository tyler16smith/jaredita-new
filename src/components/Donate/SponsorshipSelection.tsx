import React, { useEffect, useRef, useState } from 'react'
import { useDonateContext } from './context/DonateProvider'
import classNames from 'classnames'
import { api } from '@/utils/api'
import { getHeaderAndPrice } from './utils/functions'
import { ChevronDown, CircleCheck, CircleDollarSign, MapPin } from 'lucide-react'
import MoneyDonationSelector from './MoneyDonationSelector'
import PaymentFrequency from './PaymentFrequency'
import { Frequency } from '@/utils/types'

const SponsorshipSelection = () => {
  const { donationState, handleSelectDonation, cadence } = useDonateContext()
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const {
    data: donationOpportunities,
    refetch: refetchDonationOpportunities
  } = api.donate.getDonationOpportunities.useQuery(
    { type: donationState.typeSelected ?? '' },
    { enabled: !!donationState.typeSelected }
  )
  const { header, cost } = getHeaderAndPrice(donationState)

  useEffect(() => {
    refetchDonationOpportunities()
  }, [donationState.typeSelected])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        event.stopPropagation()
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  if (donationState.sponsorshipSelected?.type === 'orphanage') {
    return <MoneyDonationSelector />
  }

  return (
    <>
      <p className='uppercase text-sm font-semibold text-gray-500'>
        Sponsorship
      </p>
      <div className='flex justify-start items-center text-gray-800 text-sm'>
        <p>Frequency:</p>
        <PaymentFrequency recurring />
      </div>
      <div ref={dropdownRef} className='relative'>
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
              <p className='text-sm text-gray-400'>${cost}{cadence.value}</p>
            </div>
          </div>
          <ChevronDown size={24} className={classNames(
            'transition-transform duration-200', {
            'transform rotate-180': open
          })}
          />
        </div>

        {/* Options */}
        {open && (
          <div
            className={classNames(
              'absolute top-full mt-1 left-0 w-full bg-white border-[1px]',
              'border-gray-200 rounded-3xl p-2 md:p-3 shadow-md z-50 max-h-[300px] md:max-h-[400px]',
              'overflow-auto',
            )}
          >
            {donationOpportunities?.length === 0 ? (
              <>
                <p className='text-center text-gray-500'>No sponsorships are available.</p>
                <p className='text-center text-gray-500'>Please consider selecting a different option!</p>
              </>
            ) : donationOpportunities?.map((opportunity) => {
              let label = ''
              const cost = cadence.label === Frequency.yearly
                ? opportunity.cost * 12
                : opportunity.cost
              if (donationState.typeSelected === 'individual') {
                label = `${opportunity?.age} year old student`
              }
              if (donationState.typeSelected === 'family') {
                label = `Family of ${opportunity?.numberOfStudents} students`
              }
              const checked = donationState.donationsSelected.includes(opportunity.id)
              return (
                <div
                  key={opportunity.id}
                  onClick={handleSelectDonation(opportunity.id, cost)}
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
                    <p className='font-semibold'>{label}</p>
                    <div className='flex justify-start items-center gap-2 md:gap-4'>
                      <div className='flex justify-start items-center gap-1 text-sm text-gray-400'>
                        <CircleDollarSign size={16} />
                        <p>${cost}{cadence.value}</p>
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
        )}
      </div>
    </>
  )
}

export default SponsorshipSelection