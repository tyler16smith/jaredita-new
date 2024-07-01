import React from 'react'
import { X } from 'lucide-react'
import { Dialog } from '@radix-ui/themes'

type ModalProps = {
  title: string
  description: string
  trigger: React.ReactNode
  children: React.ReactNode
  coverImage?: string
}

const Modal = ({
  trigger,
  title,
  description,
  coverImage,
  children
}: ModalProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        {trigger}
      </Dialog.Trigger>
      <Dialog.Content maxWidth="500px" className='relative'>
        {coverImage && (
          <img
            src={coverImage}
            alt="Cover image"
            className="absolute top-0 left-0 w-full h-40 object-cover rounded-t-lg"
          />
        )}
        <Dialog.Close>
          <X
            size={32}
            className="absolute top-2 right-2 p-1.5 rounded-full bg-gray-100 bg-opacity-20 hover:bg-opacity-50 cursor-pointer transition-colors duration-200"
          />
        </Dialog.Close>
        <div className={coverImage ? "mt-40" : ""}>
          <Dialog.Title>
            {title}
          </Dialog.Title>
          <Dialog.Description size="2" mb="4">
            {description}
          </Dialog.Description>
          {children}
        </div>
      </Dialog.Content>
    </Dialog.Root>
  )
}

export default Modal