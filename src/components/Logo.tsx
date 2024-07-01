import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

const Logo = () => {
  const router = useRouter()
  return (
    <div
      onClick={() => router.push('/')}
      className='flex items-center gap-1 cursor-pointer'
    >
      <Image
        src='/icons/open_book.png'
        alt="logo"
        width={100}
        height={100}
        className='w-auto h-3.5'
      />
      <p className=''>Jaredita Foundation</p>
    </div>
  )
}

export default Logo