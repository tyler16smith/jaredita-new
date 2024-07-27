import React from 'react'
import { useDonateContext } from './context/DonateProvider'
import classNames from 'classnames'
import { Frequency } from '@/utils/types'

type PaymentFrequencyProps = {
  recurring?: boolean
}

const PaymentFrequency = ({ recurring }: PaymentFrequencyProps) => {
  const { donationState, setDonationState } = useDonateContext()

  const handleToggle = (toggle: Frequency) => {
    setDonationState({
      ...donationState,
      frequency: toggle,
    })
  }

  return (
    <select
      value={donationState.frequency}
      onChange={(e) => handleToggle(e.target.value as Frequency)}
      className={classNames(
        'p-1 rounded-lg w-fit cursor-pointer',
        'bg-transparent hover:bg-gray-100 mt-0.5',
      )}
    >
      {!recurring && <option value={Frequency.once}>once</option>}
      <option value={Frequency.monthly}>monthly</option>
      <option value={Frequency.yearly}>yearly</option>
    </select>
  )
}

export default PaymentFrequency
