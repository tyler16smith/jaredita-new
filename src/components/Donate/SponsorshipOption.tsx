import React, { useState } from 'react'
import { Button, Dialog } from '@radix-ui/themes'
import classNames from 'classnames'
import { ArrowRight, CircleCheck, X } from 'lucide-react'
import Modal from '../Modal'
import { useDonateContext } from './context/DonateProvider'
import { TSponsorshipOption } from '@/utils/types'

type SponsorshipOptionProps = {
  option: TSponsorshipOption
}

const SponsorshipOption = ({ option }: SponsorshipOptionProps) => {
  const [hover, setHover] = useState(false)
  const { donationState, setDonationState } = useDonateContext()

  const handleSelectType = () => () => {
    const typeSelected = donationState.typeSelected === option.type ? null : option.type
    const sponsorshipSelected = typeSelected ? option : null
    setDonationState({
      ...donationState,
      typeSelected,
      sponsorshipSelected,
    })
  }

  return (
    <div
      onClick={handleSelectType()}
      onMouseOver={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={classNames(
        'flex flex-col justify-center items-start gap-3 md:gap-5 w-full',
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
            'opacity-100': hover || donationState.typeSelected === option.type,
            'opacity-0': !hover
          })
          }
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
            <Button
              size='3'
              color='gray'
              radius='large'
              variant='ghost'
            >
              <span className='flex justify-center items-center gap-1'>
                Learn more <ArrowRight size={14} />
              </span>
            </Button>
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