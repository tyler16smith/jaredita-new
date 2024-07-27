import React from 'react'
import { useDonateContext } from './context/DonateProvider'

const CoverTransactionFees = () => {
  const { donationState, setDonationState, donationTotal } = useDonateContext()
  return (
    <label className='flex items-center gap-2 cursor-pointer text-gray-500 text-sm'>
      <input
        checked={donationState.coverTransactionFee}
        onChange={() => {
          setDonationState({
            ...donationState,
            coverTransactionFee: !donationState.coverTransactionFee,
          })
        }}
        type='checkbox'
        className='rounded-md w-4 h-4'
      />
      <span className='text-gray-600'>
        I'd like to cover the transaction fees (${(donationState.totalCost * 0.03)?.toFixed(2)})
      </span>
    </label>
  )
}

export default CoverTransactionFees