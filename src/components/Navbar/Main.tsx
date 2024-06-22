import React from 'react'
import { useRouter } from 'next/router'
import classNames from 'classnames'
import Logo from '../Logo'
import UserDropdown from './UserDropdown'

const Navbar = () => {
  const router = useRouter()
  return (
    <>
      <div className={classNames(
        'fixed flex justify-between items-center gap-5 bg-white rounded-2xl',
        'p-2.5 pl-5 h-14 bg-gray-100 border-[1px] border-gray-200 z-10',
        'top-7 left-1/2 transform -translate-x-1/2 bg-opacity-80 backdrop-blur-md',
        'shadow-md text-sm text-gray-700 w-full max-w-[800px]',
      )}
      >
        <div className='flex justify-start items-center gap-3'>
          <Logo />
          <div className='w-[1px] ml-3 h-6 bg-gray-300' />
          <NavbarItem text='Home' route='/' />
          <NavbarItem text='Donate' route='/donate' />
          <NavbarItem text='About' route='/about' />
          <NavbarItem text='Contact' route='/contact' />
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
      <div className='h-14' />
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