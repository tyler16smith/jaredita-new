import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <div className='flex items-center gap-1'>
      <Image
        src='/icons/open_book.png'
        alt="logo"
        width={120}
        height={120}
        className='w-auto h-5'
      />
      <p className=''>Jaredita Foundation</p>
    </div>
  )
}

export default Logo