import React from 'react'
import HomePage from "@/components/Home/Home"
import GoverningBody from '@/components/Home/GoverningBody'
import Image from 'next/image'


const Home = () => {
  return (
    <>
      <HomePage />
      <section className="w-full h-auto mt-6 bg-[#ecf0f4] px-4 md:px-10 py-8 md:py-16">
        <div className="w-full max-w-screen-xl mx-auto px-2 font-semibold flex justify-center items-center flex-col gap-2 md:gap-1">
          <h1 className="lg:text-3xl text-xl font-semibold text-center">Welcome To The</h1>
          <h1 className="lg:text-3xl font-semibold  text-lg text-center">
            Jalpaiguri Government Engineering College Alumni Association,
          </h1>
          <h1 className="lg:text-3xl text-lg text-center">Jalpaiguri</h1>
          <Image
            src="https://jgecalum.org/public/site/images/welcome.png"
            alt="welcome"
            width={500}
            height={500}
            className="w-40 md:w-60 h-40 md:h-60 object-contain my-2 md:my-4"
          />
          <p className="font-normal text-neutral-950 max-md:text-sm">
            It was a vision to establish a centre of professional learning where
            pursuit of knowledge and excellence was not to be barred by
            nationality, language, cultural plurality and religion that drove
            the founders of Jalpaiguri Government Engineering College (JGEC) to
            establish a world class centre of technical excellence. Established
            in 1961, JGEC is the second oldest of all technical institutions in
            the state of West Bengal, India. From the time of its inception,
            JGEC has gone from strength to strength providing essential manpower
            to harness the flood of opportunities in the fields of engineering
            and technology in the country and beyond. The Alumni Association
            works closely with the institution to involve ex-students and
            present students through various activities. JGEC has a number of
            alumni chapters around the globe.
          </p>

          <div className="font-medium mt-4 w-full max-w-2xl mx-auto">
            <p className="text-base md:text-lg mb-1 font-semibold">
              The JGEC Alumni Association provides opportunities to:
            </p>
            <ul className="list-disc ms-8 max-md:text-sm space-y-1">
              <li>
                Promote JGEC pride and tradition at campus and across the
                globe.
              </li>
              <li>
                Promote relationships between alumni, students and
                administration.
              </li>
              <li>
                Enhance the college experience through fun, memorable
                events and value addition.
              </li>
            </ul> 
          </div>
        </div>
      </section>
      <GoverningBody />
    </>
  )
}

export default Home