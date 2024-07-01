import { Button } from '@radix-ui/themes'
import { Mail, MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-center p-3 md:p-5 border-t-[1px] border-gray-200'>
      <div className='w-full max-w-[1400px]'>
        <div className="grid grid-cols-1 sm:grid-cols-3 items-start gap-10 md:gap-3">
          {/* Contact info */}
          <div className='flex flex-col gap-3 w-full'>
            <Image
              src='/icons/open_book.png'
              width={100}
              height={100}
              alt='Jaredita Foundation'
              className='h-9 w-fit'
            />
            <p className='text-3xl font-bold mb-3'>Jaredita Foundation</p>
            <div className='flex justify-start items-center gap-2'>
              <Mail size={20} /> hello@jaredita.org
            </div>
            <div className='flex justify-start items-center gap-2'>
              <Phone size={20} /> 123-456-7890
            </div>
            <div className='flex justify-start items-start gap-2'>
              <MapPin size={20} />
              <p className='max-w-[140px] leading-5'>P.O. Box 7182 University Station Provo, UT 84602</p>
            </div>
          </div>

          {/* Organization */}
          <div className='w-full mt-5'>
            <p className='text-2xl font-bold'>Organization</p>
            <div className='flex flex-col gap-4 mt-4'>
              <a href="/" target="_blank">Home</a>
              <a href="/donate" target="_blank">Donate</a>
              <a href="/about" target="_blank">About Us</a>
              <a href="/contact" target="_blank">Contact</a>
            </div>
          </div>
          <div className='w-full font-semibold'>
            <p>Brigher futures are made possible because of donors like you. Thank you.</p>
            <div className='flex justify-start items-center gap-2 mt-5'>
              <Button size='4' color='gray' variant='solid' highContrast radius='large'>
                Donate
              </Button>
              <Button size='4' color='gray' variant='surface' highContrast radius='large'>
                Learn more
              </Button>
            </div>
          </div>
        </div>
        <div className='border-t-[1px] border-gray-200 mt-10 pt-7 pb-4'>
          <p className='text-center text-sm text-gray-500'>&copy; 2024 Jaredita Foundation. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}

export default Footer