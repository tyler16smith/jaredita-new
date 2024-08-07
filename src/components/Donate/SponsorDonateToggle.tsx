import React from 'react'
import { useDonateContext } from './context/DonateProvider'
import classNames from 'classnames'
import { SponsorshipToggle } from '@/utils/types'

const SponsorDonateToggle = () => {
  const { donationState, setDonationState } = useDonateContext()

  const handleToggle = (toggle: SponsorshipToggle) => {
    setDonationState({
      ...donationState,
      sponsorshipToggle: toggle,
    })
  }

  return (
    <div className='relative p-1 rounded-2xl shadow-md bg-white w-fit border-[1px] border-gray-200'>
      <div
        className={classNames(
          'absolute top-1 bottom-1 left-1 rounded-xl bg-black transition-transform duration-200',
          {
            'translate-x-0': donationState.sponsorshipToggle === SponsorshipToggle.sponsor,
            'translate-x-full': donationState.sponsorshipToggle === SponsorshipToggle.donate
          }
        )}
        style={{ width: 'calc(50% - 0.25rem)' }}
      />
      <div className='relative flex'>
        <button
          onClick={() => handleToggle(SponsorshipToggle.sponsor)}
          className={classNames(
            'relative px-5 py-2 rounded-xl transition-colors duration-200 z-10', {
            'text-white': donationState.sponsorshipToggle === SponsorshipToggle.sponsor,
            'text-black': donationState.sponsorshipToggle !== SponsorshipToggle.sponsor
          }
          )}
        >
          Sponsor
        </button>
        <button
          onClick={() => handleToggle(SponsorshipToggle.donate)}
          className={classNames(
            'relative px-5 py-2 rounded-xl transition-colors duration-200 z-10', {
            'text-white': donationState.sponsorshipToggle === SponsorshipToggle.donate,
            'text-black': donationState.sponsorshipToggle !== SponsorshipToggle.donate
          }
          )}
        >
          Donate
        </button>
      </div>
    </div>
  )
}

export default SponsorDonateToggle
