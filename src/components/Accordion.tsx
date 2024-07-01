import React, { useState } from 'react'
import { SlideFromTop } from './Animations'

type Props = {
  trigger: React.ReactNode
  content: React.ReactNode
}

const Accordion = ({ trigger, content }: Props) => {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <div onClick={() => setOpen(!open)} className='cursor-pointer'>
        {trigger}
      </div>
      <SlideFromTop open={open}>
        <div className='mt-3'>
          {content}
        </div>
      </SlideFromTop>
    </div>
  )
}

export default Accordion