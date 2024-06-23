import React from 'react'
import { useDonateContext } from './context/DonateProvider'
import classNames from 'classnames'

const SponsorDonateToggle = () => {
  const { sponsorDonateToggle, setSponsorDonateToggle } = useDonateContext()

  return (
    <div className='relative p-1 rounded-2xl shadow-md bg-white w-fit border-[1px] border-gray-200'>
      <div
        className={classNames(
          'absolute top-1 bottom-1 left-1 rounded-xl bg-black transition-transform duration-200',
          {
            'translate-x-0': sponsorDonateToggle === 'sponsor',
            'translate-x-full': sponsorDonateToggle === 'donate'
          }
        )}
        style={{ width: '50%' }}
      ></div>
      <div className='relative flex'>
        <button
          onClick={() => setSponsorDonateToggle('sponsor')}
          className={classNames(
            'relative px-5 py-2 rounded-xl transition-colors duration-200 z-10', {
            'text-white': sponsorDonateToggle === 'sponsor',
            'text-black': sponsorDonateToggle !== 'sponsor'
          }
          )}
        >
          Sponsor
        </button>
        <button
          onClick={() => setSponsorDonateToggle('donate')}
          className={classNames(
            'relative px-5 py-2 rounded-xl transition-colors duration-200 z-10', {
            'text-white': sponsorDonateToggle === 'donate',
            'text-black': sponsorDonateToggle !== 'donate'
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
