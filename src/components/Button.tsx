import { Spinner } from '@radix-ui/themes'
import React from 'react'

type ButtonProps = {
  children: React.ReactNode
  onClick: () => void
  loading?: boolean
  disabled?: boolean
  props?: any
}

const Button = ({
  children,
  onClick,
  loading = false,
  disabled = false,
  props,
}: ButtonProps) => {
  return (
    <button
      {...props}
      onClick={onClick}
      disabled={loading || disabled}
      className='bg-white border-[1px] border-gray-200 hover:shadow-md w-32 py-2 rounded-xl transition-colors duration-200'
    >
      {children}
    </button>
  )
}

export default Button