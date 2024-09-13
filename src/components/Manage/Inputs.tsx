import Image from "next/image"
import classNames from "classnames"
import { Mail, MapPin, RefreshCcw } from "lucide-react"
import { FadeInOutWrapper } from "../Animations"
import { type TFamily, type TStudent } from "@/utils/types"
import { type UseFormReturn } from "react-hook-form"
import { styles } from "../Donate/AddStudent/hooks/useAddStudentForm"

type InputProps = {
  editMode: boolean
  form: UseFormReturn<any>
  email?: string
  fullAddress?: string
  student?: TStudent
  families?: TFamily[]
  handleUpdate: (key: string) => any
}
export const ImageInput = ({ editMode, form, student, handleUpdate }: InputProps) => {
  return (
    <div className='relative'>
      <FadeInOutWrapper open={true}>
        <Image
          src={student?.imageUrl || ""}
          width={320}
          height={320}
          alt="Donation opportunity"
          className="rounded-lg w-full h-[200px] object-cover"
        />
      </FadeInOutWrapper>
      <FadeInOutWrapper open={editMode}>
        <button
          // onClick={handleUpdateImage}
          className={classNames(
            'absolute flex flex-col justify-center items-center gap-3',
            'bg-opacity-80 hover:bg-opacity-90 top-1/2 left-1/2 transform',
            '-translate-x-1/2 -translate-y-1/2 bg-gray-800 w-full h-full',
            'rounded-lg p-2 text-white text-sm transition-all duration-200',
            styles.Focus,
          )}
        >
          <RefreshCcw size={24} className='shrink-0' />
          Change image
        </button>
      </FadeInOutWrapper>
    </div>
  )
}

export const EmailInput = ({ editMode, form, email, handleUpdate }: InputProps) => {
  return (
    <div className={`flex justify-start items-center gap-2 ${editMode ? 'mt-1' : 'mt-3'}`}>
      <Mail size={16} className='shrink-0' />
      {editMode ? (
        <input
          type='email'
          id='email'
          className={`w-full border border-gray-300 rounded-md px-1.5 -ml-0.5 ${styles.Focus}`}
          {...form.register('email')}
          onBlur={handleUpdate('email')}
        />
      ) : (
        <p className='truncate max-w-[200px]'>
          {email ?? 'N/A'}
        </p>
      )}
    </div>
  )
}

export const FullAddressInput = ({ editMode, form, fullAddress, handleUpdate }: InputProps) => {
  return (
    <div className='flex justify-start items-center gap-2'>
      <MapPin size={16} className='shrink-0' />
      {editMode ? (
        <input
          type='text'
          id='fullAddress'
          className={`w-full border border-gray-300 rounded-md px-1.5 -ml-0.5 ${styles.Focus}`}
          {...form.register('fullAddress')}
          onBlur={handleUpdate('fullAddress')}
        />
      ) : (
        <p>{fullAddress ?? 'N/A'}</p>
      )}
    </div>
  )
}