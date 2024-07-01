import React, { useState } from 'react'
import { Menu } from 'lucide-react'

type MobileAsideProps = {
  open: () => void
}

const MobileAside = ({ open }: MobileAsideProps) => {
  return (
    <div
      className='p-1.5 md:hidden cursor-pointer hover:bg-gray-100 rounded-lg'
      onClick={open}
    >
      <Menu size={24} />
    </div>
  )
}

export default MobileAside