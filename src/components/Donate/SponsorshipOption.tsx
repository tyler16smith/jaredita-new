import React, { useState } from 'react'
import { Button, Dialog } from '@radix-ui/themes'
import classNames from 'classnames'
import { ArrowRight, CircleCheck, X } from 'lucide-react'
import Modal from '../Modal'
import { useDonateContext } from './context/DonateProvider'
import { type TSponsorshipOption } from '@/utils/types'

type SponsorshipOptionProps = {
  option: TSponsorshipOption
}

const SponsorshipOption = ({ option }: SponsorshipOptionProps) => {
  const { donationState, setDonationState } = useDonateContext()

  const handleSelectType = () => () => {
    const typeSelected = donationState.typeSelected === option.type ? null : option.type
    const sponsorshipSelected = typeSelected ? option : null
    setDonationState({
      ...donationState,
      typeSelected,
      sponsorshipSelected,
      // TODO: consider separating the option states to save progress so we don't have to reset (?)
      donationsSelected: [],
      totalCost: 0,
    })
  }

  return (
    <div
      onClick={handleSelectType()}
      className={classNames(
        'flex flex-col justify-center items-start gap-3 md:gap-5 w-full group',
        'transition-all transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-lg',
        'max-w-[535px] rounded-3xl p-5 mb-5 border-[1px] shadow-even cursor-pointer hover:shadow-even-lg', {
        'border-blue-500': option.highlight,
        'border-gray-300': !option.highlight,
        'bg-blue-50': donationState.typeSelected === option.type,
      }
      )}
    >
      <div className='w-full flex justify-between items-center gap-3'>
        <div className='flex justify-center items-center w-12 h-12 bg-gray-200 rounded-full'>
          {option.icon}
        </div>
        <CircleCheck
          size={48}
          strokeWidth={1}
          color={donationState.typeSelected === option.type ? 'white' : 'gray'}
          fill={donationState.typeSelected === option.type ? '#3b82f6' : 'transparent'}
          className={classNames(
            'transition-opacity duration-200', {
            'md:opacity-0 md:group-hover:opacity-100': donationState.typeSelected !== option.type,
          }
          )}
        />
      </div>
      <p className='font-semibold md:mt-5 text-xl md:text-2xl'>{option.title}</p>
      <p className='md:mt-3'>{option.description}</p>
      <div className='md:mt-5'>
        <Modal
          title={option.title}
          description={option.description}
          coverImage={option.coverImage}
          trigger={
            <button className='flex justify-center items-center gap-1 hover:underline cursor-pointer'>
              Learn more <ArrowRight size={14} />
            </button>
          }
        >
          <div className='flex flex-col justify-center items-start gap-5'>
            {option.content}
          </div>
        </Modal>
      </div>
    </div>
  )
}

export default SponsorshipOption