import React, { useState } from 'react'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import Logo from '../Logo'
import UserDropdown from './UserDropdown'
import MobileAside from './MobileAside'

const Navbar = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className={classNames(
        'fixed bg-white md:rounded-2xl',
        'p-2.5 md:pl-5 bg-gray-100 md:border-[1px] md:border-gray-200 z-10',
        'md:top-7 left-1/2 transform -translate-x-1/2 bg-opacity-80 backdrop-blur-md',
        'shadow-md text-sm text-gray-700 w-full max-w-[800px] transition-all duration-300', {
        'h-14': !open,
        'h-auto': open
      }
      )}
      >
        <div className='flex justify-between items-center gap-5'>
          <div className='flex justify-start items-center gap-3'>
            <MobileAside open={() => setOpen(!open)} />
            <Logo />
            <div className='hidden md:flex justify-start items-center gap-3'>
              <div className='w-[1px] ml-3 h-6 bg-gray-300' />
              <NavbarItem text='Home' route='/' />
              <NavbarItem text='Donate' route='/donate' />
              <NavbarItem text='About' route='/about' />
              <NavbarItem text='Contact' route='/contact' />
            </div>
          </div>
          <div className='flex justify-end items-center gap-5'>
            <UserDropdown />
            <button
              onClick={() => router.push('/donate')}
              className='px-3 py-1.5 rounded-xl bg-black text-white hover:bg-opacity-80 transition-colors duration-300'
            >
              Donate
            </button>
          </div>
        </div>
        <div className={classNames('mt-4', {
          'hidden': !open
        })}
        >
          <NavbarItem text='Home' route='/' />
          <NavbarItem text='Donate' route='/donate' />
          <NavbarItem text='About' route='/about' />
          <NavbarItem text='Contact' route='/contact' />
        </div>
      </div >
      <div className='h-28' />
    </>
  )
}

type NavbarItemProps = {
  text: string
  route: string
}

const NavbarItem = ({ text, route }: NavbarItemProps) => {
  const router = useRouter()
  return (
    <p
      onClick={() => router.push(route)}
      className='px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-colors duration-300 cursor-pointer'
    >
      {text}
    </p>
  )
}

export default Navbar