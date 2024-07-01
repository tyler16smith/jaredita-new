import React from 'react'
import { useDonateContext } from './context/DonateProvider'
import classNames from 'classnames'

const SponsorDonateToggle = () => {
  const { donationState, setDonationState } = useDonateContext()

  return (
    <div className='relative p-1 rounded-2xl shadow-md bg-white w-fit border-[1px] border-gray-200'>
      <div
        className={classNames(
          'absolute top-1 bottom-1 left-1 rounded-xl bg-black transition-transform duration-200',
          {
            'translate-x-0': donationState.sponsorshipToggle === 'sponsor',
            'translate-x-full': donationState.sponsorshipToggle === 'donate'
          }
        )}
        style={{ width: 'calc(50% - 0.25rem)' }}
      />
      <div className='relative flex'>
        <button
          onClick={() => setDonationState({ ...donationState, sponsorshipToggle: 'sponsor' })}
          className={classNames(
            'relative px-5 py-2 rounded-xl transition-colors duration-200 z-10', {
            'text-white': donationState.sponsorshipToggle === 'sponsor',
            'text-black': donationState.sponsorshipToggle !== 'sponsor'
          }
          )}
        >
          Sponsor
        </button>
        <button
          onClick={() => setDonationState({ ...donationState, sponsorshipToggle: 'donate' })}
          className={classNames(
            'relative px-5 py-2 rounded-xl transition-colors duration-200 z-10', {
            'text-white': donationState.sponsorshipToggle === 'donate',
            'text-black': donationState.sponsorshipToggle !== 'donate'
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
