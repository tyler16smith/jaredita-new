import React from 'react'
import { Button } from '@radix-ui/themes'
import classNames from 'classnames'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { TSponsorshipOption } from '@/pages/donate'

type SponsorshipOptionProps = {
  option: TSponsorshipOption
}

const SponsorshipOption = ({ option }: SponsorshipOptionProps) => {
  return (
    <div
      className={classNames(
        'flex flex-col justify-center items-start gap-5 w-full',
        'transition-all transition-transform duration-300 ease-in-out hover:scale-[1.03] hover:shadow-lg',
        'max-w-[535px] rounded-3xl p-5 mb-5 border-[1px] shadow-even cursor-pointer hover:shadow-even-lg', {
        'border-blue-500': option.highlight,
        'border-gray-300': !option.highlight,
      }
      )}
    >
      <div className='flex justify-center items-center w-12 h-12 bg-gray-200 rounded-full'>
        {option.icon}
      </div>
      <p className='font-medium mt-5 text-2xl'>{option.title}</p>
      <p className='mt-3'>{option.description}</p>
      <div className='mt-5'>
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
      </div>
    </div>
  )
}

export default SponsorshipOption