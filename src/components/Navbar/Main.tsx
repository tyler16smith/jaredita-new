import { User } from 'lucide-react'
import React from 'react'
import UserDropdown from './UserDropdown'
import OrganizationLogo from '../OrganizationLogo'
import { useRouter } from 'next/router'

const Navbar = () => {
  return (
    <>
      <div
        className='fixed top-0 flex justify-between items-center w-full h-14 bg-gray-100 border-[1px] border-b-gray-200 px-4 py-2 z-10'
      >
        <div className='flex justify-start items-center gap-5'>
          <OrganizationLogo />
          <div className='w-[1px] h-6 bg-gray-300' />
          <NavbarItem text='Home' route='/' />
          <NavbarItem text='Donate' route='/donate' />
        </div>
        <UserDropdown />
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
      className='text-sm font-bold px-3 py-1.5 rounded-lg hover:bg-gray-200 transition-colors duration-300 cursor-pointer'
    >
      {text}
    </p>
  )
}

export default Navbar