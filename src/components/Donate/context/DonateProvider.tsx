// DonateContext.tsx
import React, { createContext, useContext } from 'react'
import useDonate from '../hooks/useDonate'

type UseDonate = ReturnType<typeof useDonate>
const DonateContext = createContext<UseDonate | undefined>(undefined)

export const DonateProvider: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  const donateManagement = useDonate()

  return (
    <DonateContext.Provider value={donateManagement}>
      {children}
    </DonateContext.Provider>
  )
}

export const useDonateContext = (): UseDonate => {
  const context = useContext(DonateContext)
  if (context === undefined) {
    throw new Error('useDonateContext() must be used within a DonateProvider')
  }
  return context
}
