import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const Home = () => {
  return (
    <div className="min-h-[60vh] w-full flex flex-col items-center justify-center gap-4 text-center">
      <div className="flex justify-start items-center w-full h-[75vh] bg-[url('/images/kids-2.jpg')] bg-cover bg-center bg-no-repeat">
        <div className="flex flex-col justify-center text-left gap-4 px-[5%] lg:pl-[16%] text-white max-w-[1000px] [text-shadow:_0px_2px_30px_rgba(0,0,0,1)]">
          <p className="text-xl lg:text-2xl">Helping students achieve</p>
          <p className="text-5xl lg:text-7xl font-bold leading-[50px] lg:leading-[70px]">A brighter future through education</p>
        </div>
      </div>

      <div className="flex flex-col gap-32 w-full max-w-[1400px] rounded-2xl bg-white shadow-xl p-20 -my-16 z-20">
        {/* Who are we? */}
        <div>
          <p className="text-2xl lg:text-3xl font-bold">Who are we?</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-16">
            <div className="flex flex-col items-start gap-4 text-start leading-8">
              <div className="flex justify-start items-center gap-4">
                <p className="text-2xl lg:text-4xl font-bold text-green-500">01</p>
                <p className="text-xl lg:text-2xl font-bold">About</p>
              </div>
              <p className='text-gray-500'>
                Jaredita Foundation Inc. (JFI) is a non-profit organization dedicated
                to assisting LDS families in Indonesia with the cost of primary and
                secondary school education.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 text-start leading-8">
              <div className="flex justify-start items-center gap-4">
                <p className="text-2xl lg:text-4xl font-bold text-green-500">02</p>
                <p className="text-xl lg:text-2xl font-bold">Impact</p>
              </div>
              <p className='text-gray-500'>
                Your generous donation enables Latter-day Saint children and young adults
                in Indonesia to overcome financial barriers to accessing quality education.
                Surplus funds are extended to support children from other religious groups.
                With just <span className="font-bold">$15 per month</span>, you can sustain a
                child's education through both primary and secondary school.
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 text-start leading-8">
              <div className="flex justify-start items-center gap-4">
                <p className="text-2xl lg:text-4xl font-bold text-green-500">03</p>
                <p className="text-xl lg:text-2xl font-bold">Donations</p>
              </div>
              <p className='text-gray-500'>
                As an all-volunteer organization, nearly all donations are used directly for
                educational expenses. Students seeking assistance apply and are officially
                accepted into an educational program before aid is provided. JFI facilitators
                ensure transparency by paying student expenses directly to the schools.
              </p>
            </div>
          </div>
        </div>

        {/* Sponsorships */}
        <div>
          <p className="text-2xl lg:text-3xl font-bold">Sponsorship opportunities</p>
          <p className="text-gray-500 text-lg mt-4">Below are the three ways you can support via a monthly or annual sponsorship</p>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-start max-w-[1000px] mx-auto'>
            <Link href="/donate">
              <div className="flex justify-start items-end w-full aspect-square bg-[url('/images/kids-2.jpg')] bg-cover bg-center bg-no-repeat rounded-2xl relative group">
                <div className="absolute inset-0 bg-green-100/65 rounded-2xl group-hover:opacity-0 transition-opacity duration-300"></div>
                <div className="flex flex-col justify-center text-left gap-3 p-8 text-white relative z-10 [text-shadow:_0px_0px_20px_rgba(0,0,0,1)]">
                  <p className="text-2xl font-bold">Individual</p>
                  <p>Sponsor an individual student for $15 per month</p>
                </div>
              </div>
            </Link>
            <Link href="/donate">
              <div className="flex justify-start items-end w-full aspect-square bg-[url('/images/family.jpg')] bg-cover bg-center bg-no-repeat rounded-2xl relative group">
                <div className="absolute inset-0 bg-yellow-100/65 rounded-2xl group-hover:opacity-0 transition-opacity duration-300"></div>
                <div className="flex flex-col justify-center text-left gap-3 p-8 text-white [text-shadow:_0px_0px_20px_rgba(0,0,0,1)] relative z-10">
                  <p className="text-2xl font-bold">Family</p>
                  <p>Sponsor a family for $15 per student per month</p>
                </div>
              </div>
            </Link>
            <Link href="/donate">
              <div className="flex justify-start items-end w-full aspect-square bg-[url('/images/bina-kasih-orphanage.jpg')] bg-cover bg-center bg-no-repeat rounded-2xl relative group">
                <div className="absolute inset-0 bg-blue-100/65 rounded-2xl group-hover:opacity-0 transition-opacity duration-300"></div>
                <div className="flex flex-col justify-center text-left gap-3 p-8 text-white [text-shadow:_0px_0px_20px_rgba(0,0,0,1)] relative z-10">
                  <p className="text-2xl font-bold">Orphanage</p>
                  <p>Sponsor an orphanage to support its students</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Mission */}
      <div className="flex justify-start items-center w-full h-[90vh] bg-[url('/images/bg.jpg')] bg-cover bg-center bg-no-repeat relative">
        <div className="absolute inset-0 bg-gray-900/50"></div>
        <div className="px-[5%] lg:pl-[16%] max-w-[800px] relative z-10">
          <div className="flex flex-col justify-center text-left gap-7 p-12 bg-white rounded-2xl shadow-xl">
            <p className="text-3xl font-bold">Our mission</p>
            <p className="text-xl font-light leading-8">
              The Jaredita Foundation is committed to helping young people in Indonesia build a better future for themselves and their families by providing financial assistance that allows them to achieve their educational goals.
            </p>
            <p className="text-xl font-light leading-8">
              The generous hearts of donors and volunteers make this dream a reality.
            </p>
            <Link href="/donate" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 rounded-xl w-fit">
              Donate Today!
            </Link>
          </div>
        </div>
      </div>

      {/* About us */}
      <div className="md:flex gap-24 w-full max-w-[1400px] px-5 md:px-20 py-20">
        <div className="flex-shrink-0">
          <Image src="/images/about.png" alt="About us" width={500} height={500} className="rounded-2xl" />
        </div>
        <div className="flex flex-col text-start gap-12">
          <p className="text-3xl font-bold mt-16 md:mt-0 -mb-6">Our story</p>
          <p className="text-xl font-light leading-8">
            The Jaredita Foundation Inc (JFI) is a 501(c)(3) non-profit organization named in honor of Jaredita–beloved daughter of Steffi and Subandriyo. She passed away in 2007 after one year of schooling at BYU-Hawaii and just weeks before she planned to enter BYU-Provo. Jaredita had a love of learning and a love for the children of Indonesia.
          </p>
          <p className="text-xl font-light leading-8">
            The purpose of JFI is to help Latter-day Saint children and young adults get an education. With the help of in-country facilitators (all are returned missionaries), children who are not able to attend school because their families cannot afford tuition, books and uniforms (about $11-15 per month) will be offered financial assistance to pay for primary and secondary schooling.
          </p>
          <p className="text-xl font-light leading-8">
            Payments are made directly to the schools. In most instances the fund will pay for half of the school cost with the family paying the other half. On occasion, JFI will also offer tuition assistance for qualified Latter-day Saint young adults to obtain post secondary school training.
          </p>
          <p className="text-xl font-light leading-8">
            Donors will be sent a yearly report of how the funds were used.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home