import React, { useEffect, useRef, useState } from 'react'
import classNames from 'classnames'
import { api } from '@/utils/api'
import { ChevronDown, CircleCheck, CircleDollarSign, MapPin, UsersRound } from 'lucide-react'
import { Frequency, type TFamily } from '@/utils/types'
import { type UseFormReturn } from 'react-hook-form'
import Image from 'next/image'
import FamilyImage from '@/components/Manage/FamilyImage'

const SelectFamilyDropdown = ({ form }: {
  form: UseFormReturn<any>
}) => {
  const [open, setOpen] = useState(false)
  const [familySelected, setFamilySelected] = useState<TFamily | null>(null)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { data: families } = api.families.getFamilies.useQuery()

  console.log("FAMILIES: ", families)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        event.stopPropagation()
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSelectFamily = (family: TFamily) => {
    setFamilySelected(family)
    form.setValue('familyId', family.id)
    setOpen(false)
  }

  return (
    <div>
      <label className='text-sm font-semibold text-gray-500'>
        Add to family
      </label>
      <div ref={dropdownRef} className='relative mt-2'>
        {/* Dropdown */}
        <div
          onClick={() => setOpen(!open)}
          className={classNames(
            'flex justify-between items-center gap-3 px-3 py-2 rounded-xl',
            'bg-white border-[1px] border-gray-200 hover:shadow-md cursor-pointer',
            'transition-all duration-200 text-gray-700',
          )}
        >
          <div className='flex justify-start items-center gap-3'>
            <div className='flex justify-center items-center w-10 h-10 bg-gray-200 rounded-full'>
              <FamilyImage imageUrl={familySelected?.imageUrl} />
            </div>
            <div>
              <p className='font-semibold'>
                {familySelected?.familyName ?? 'Select a family'}
              </p>
              {familySelected?.fullAddress && (
                <div className='flex justify-start items-center gap-2 text-sm'>
                  <MapPin size={16} className='shrink-0' />
                  {familySelected?.fullAddress}
                </div>
              )}
            </div>
          </div>
          <ChevronDown size={24} className={classNames(
            'transition-transform duration-200', {
            'transform rotate-180': open
          })}
          />
        </div>

        {/* Options */}
        {open && (
          <div
            className={classNames(
              'absolute top-full mt-1 left-0 w-full bg-white border-[1px]',
              'border-gray-200 rounded-3xl p-2 md:p-3 shadow-md z-50 max-h-[300px] md:max-h-[400px]',
              'overflow-auto',
            )}
          >
            {families?.map(family => (
              <div
                key={family.id}
                onClick={() => handleSelectFamily(family)}
                className={classNames(
                  'flex justify-start items-center gap-1 md:gap-3 p-2 rounded-2xl',
                  'bg-white hover:bg-gray-50 cursor-pointer',
                  'transition-all duration-200',
                )}
              >
                <FamilyImage imageUrl={family.imageUrl} />
                <div>
                  <p className='font-semibold'>{family.familyName}</p>
                  <div className='flex justify-start items-center gap-1 text-sm text-gray-400'>
                    <MapPin size={16} />
                    <p>{family.fullAddress}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default SelectFamilyDropdown