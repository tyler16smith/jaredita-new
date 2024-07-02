import React from 'react'
import { useDonateContext } from './context/DonateProvider'

const PaymentInfo = () => {
  const { donationState, donationTotal } = useDonateContext()
  return (
    <div>
      <p className='uppercase text-sm font-semibold text-gray-500'>
        Payment
      </p>
      <div className='mt-4'>
        <p className="text-gray-600 my-2 w-full">
          Donation total:
          <span className="font-bold px-1">
            ${donationTotal.toFixed(2)} USD
            <span className="px-1">monthly</span>
          </span>
          {donationState.totalCost > 0 && (
            <span className="text-sm">
              {` ($${donationState.totalCost} + $${(donationState.totalCost * 0.03)?.toFixed(2)} to help cover fees)`}
            </span>
          )}
        </p>
        <p className="text-sm text-gray-400 px-1">*cancel at any time</p>
      </div>
    </div>
  )
}

export default PaymentInfo