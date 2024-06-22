import { LogIn, LogOut, User } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import { FadeInOutWrapper } from '../Animations'

const UserDropdown = () => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // when user clicks outside the dropdown, close the dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleClick = () => {
    setIsOpen(false)
    // logout user
  }

  return (
    <div className='flex justify-center items-center relative border-[1.5px] border-black rounded-full'>
      <User
        size={24}
        strokeWidth={2}
        onClick={() => setIsOpen(!isOpen)}
        className='text-black p-1 hover:bg-gray-200 rounded-full cursor-pointer transition-colors duration-300'
      />
      <FadeInOutWrapper open={isOpen}>
        <div
          ref={dropdownRef}
          className='absolute top-8 right-0 w-48 bg-white shadow-lg border-[1px] border-gray-200 rounded-md'
        >
          <DropdownItem text='Log in' icon={<LogIn size={16} />} onClick={handleClick} />
        </div>
      </FadeInOutWrapper>
    </div>
  )
}

type DropdownItemProps = {
  text: string
  icon: React.ReactNode
  onClick: () => void
}

const DropdownItem = ({ text, icon, onClick }: DropdownItemProps) => (
  <p
    onClick={onClick}
    className='flex justify-start items-center gap-2 p-2 w-full hover:bg-gray-100 cursor-pointer'
  >
    {icon}
    {text}
  </p>
)

export default UserDropdown