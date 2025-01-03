import React from 'react'

const BinaKasihOrphanage = () => {
  return (
    <div>
      {/* Header */}
      <div className="flex justify-center items-center w-[100vw] h-[75vh] bg-[url('/images/bina-kasih-orphanage.jpg')] bg-cover bg-center bg-no-repeat">
        <p className="text-white [text-shadow:_0px_2px_30px_rgba(0,0,0,1)] text-5xl lg:text-7xl font-bold leading-[50px] lg:leading-[70px]">
          Bina Kasih Orphanage
        </p>
      </div>

      {/* About */}
      <div className='flex justify-center items-center w-full'>
        <div className="flex flex-col gap-7 w-full max-w-[1400px] p-20 text-gray-700 text-lg">
          <p>
            Located just off the coast of Northern Sumatra Indonesia is the small island of Nias.
            While living there, Ibu Mastina, the founder and proprietor of the orphanage, noticed
            some of the children in her village were unable to attend school because they could not
            afford it. Feeling called to help these children, she sold her five cows and half of her
            family's coconut farm to bring 20 children ranging from 6 to 16 years old to Medan. She
            rented a small home and struggled to support the children with the proceeds of the remaining
            half of her coconut farm.
          </p>
          <p>
            The home they rented was on the same street as the local Church of Jesus Christ of
            Latter-day Saints. After seeing the missionaries pass a few times, they asked if they
            could attend church there. They began attending meetings and many have since become
            baptized as members of The Church.
          </p>
          <p>
            Donations made specifically to Bina Kasih Orphanage will go to help supply needed food
            and clothing for the children along with any support needed for school fees. To donate
            to the orphanage, you may send a check to Jaredita Foundation, P.O. Box 7182, University
            Station, Provo, Ut 84602 or use click the button below to use PayPal for secure online
            donations. To make sure that we know your donation is for the orphanage please send an
            email to Handi Mulia at hmulia@comcast.net to inform Handi that your donation is meant
            for the orphanage. Please include your name and the amount of your donation in the email.
          </p>
        </div>
      </div>
    </div>
  )
}

export default BinaKasihOrphanage