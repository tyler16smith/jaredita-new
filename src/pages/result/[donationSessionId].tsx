import { api } from '@/utils/api'
import { useRouter } from 'next/router'
import React from 'react'

const SuccessPage = () => {
  const router = useRouter()
  const donationSessionId = router.query.donationSessionId as string
  const { data: donationSession } = api.donate.getDonationSession.useQuery(
    { id: donationSessionId },
    { enabled: !!donationSessionId }
  )

  console.log("DONATION SESSION: ", donationSession)

  if (!donationSession)
    return <LoadingDonationSession />

  return (
    <div>
      <p>Congratulations!</p>
      <p>Your donation has been successfully processed.</p>
      <p>You are now sponsoring the following [2] [students/familes] with your [monthly/annual] donation of [$100]:</p>
      <div className='grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4'>
        {donationSession?.donations.map((donation, index) => (
          <div key={index} className='bg-gray-100 p-4 rounded-lg'>
            <p>{donation.studentName}</p>
            <p>{donation.amount}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SuccessPage

const LoadingDonationSession = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-[80vh]'>
      <div className='h-16 w-64 rounded-xl bg-gray-100 animate-pulse' />
    </div>
  )
}