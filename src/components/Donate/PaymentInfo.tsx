import React from 'react'
import { useDonateContext } from './context/DonateProvider'
import PaymentFrequency from './PaymentFrequency'
import CoverTransactionFees from './CoverTransactionFees'

const PaymentInfo = () => {
  const { donationState, donationTotal, costBreakdown } = useDonateContext()
  return (
    <div>
      <p className='uppercase text-sm font-semibold text-gray-500'>
        Payment
      </p>
      <div className='mt-4'>
        <p className="text-gray-600 my-2 w-full">
          Total:
          <span className="font-bold px-1">
            ${donationTotal.toFixed(2)} USD
            <PaymentFrequency recurring />
          </span>
          {donationState.totalCost > 0 && (
            <span className="text-sm">{costBreakdown}</span>
          )}
        </p>
        <CoverTransactionFees />
      </div>
    </div>
  )
}

export default PaymentInfo