import { UsersRound } from "lucide-react"
import Image from "next/image"

const FamilyImage = ({ imageUrl }: { imageUrl: string | undefined }) => (
  <div className='flex justify-center items-center w-10 h-10 bg-gray-200 rounded-full'>
    {imageUrl ? (
      <Image
        src={imageUrl}
        width={48}
        height={48}
        alt="Family"
        className="rounded-full"
      />
    ) : (
      <UsersRound size={24} color='gray' className='p-[3px]' />
    )}
  </div>
)

export default FamilyImage