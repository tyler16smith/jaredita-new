import React from 'react'

const BeritaJaredita = () => {
  return (
    <>
      {/* Header */}
      <div className="flex justify-center items-center w-[100vw] h-[300px] bg-[url('/images/students.jpg')] bg-cover bg-center bg-no-repeat bg-gray-600 bg-blend-overlay">
        <p className="text-white [text-shadow:_0px_2px_30px_rgba(0,0,0,1)] text-4xl lg:text-5xl font-bold leading-[50px] lg:leading-[70px]">
          Berita Jaredita (Newsletter)
        </p>
      </div>

      {/* Newsletters */}
      <div className='flex justify-center items-center w-full'>
        <div className="flex flex-col gap-7 w-full max-w-[1400px] p-20 text-gray-700 text-lg">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
          </p>
        </div>
      </div>
    </>
  )
}

export default BeritaJaredita