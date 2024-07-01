import React, { useState } from 'react'
import Accordion from '../Accordion'

type Props = {}

const Explainer = (props: Props) => {
  return (
    <Accordion
      trigger={
        <p className='underline text-sm text-gray-400 cursor-pointer'>
          Why can't I see any names or bios?
        </p>
      }
      content={
        <p className='text-gray-400 text-sm'>
          You will see the names and bios of those you sponsor after signing up for the
          sponsorship. To protect the students and families, we do not show any personally
          identifiable information until after a donor has completed their sponsorship.
        </p>
      }
    />
  )
}

export default Explainer