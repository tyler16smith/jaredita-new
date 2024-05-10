import { HardHat } from "lucide-react"

const Home = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center gap-4 px-4 py-16 text-center">
      <div className="max-w-[700px] w-full flex flex-col items-center justify-center">
        <HardHat size={64} color="#2073C0" />
        <p className="text-3xl sm:text-[3rem] tracking-tight mt-4 leading-[50px]">
          The new <span className="text-[#2073C0] font-extrabold">Jaredita Foundation</span> website is on its way!
        </p>
      </div>
    </div>
  )
}

export default Home