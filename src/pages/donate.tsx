import { DonateProvider } from '@/components/Donate/context/DonateProvider'
import React from 'react'

const Donate = () => {
  return (
    <div>
      Donate page
    </div>
  )
}

const DonatePage = () => {
  return (
    <DonateProvider>
      <Donate />
    </DonateProvider>
  )
}

export default DonatePage