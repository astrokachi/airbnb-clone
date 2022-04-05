import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <div className="hero mt-2 w-[90%] ml-auto mr-auto md:mt-[2em]">
      <div className="hero__box  mx-5 mb-4 flex  h-[400px] flex-grow items-center justify-center  rounded-full pb-4 text-white md:h-[500px] lg:h-[350px]">
        <div></div>
        <div className="flex flex-col items-center gap-10 md:w-[700px]">
          <div class>
            <h2 className="mr-auto ml-auto w-max pr-1 text-[28px] font-bold md:inline-block md:text-[32px]">
              Help house
            </h2>
            <h2 className="mr-auto ml-auto w-max pr-2 text-[28px] font-semibold md:inline-block md:text-[32px]">
              100,000 refugees
            </h2>
            <h2 className="mr-auto ml-auto w-max text-[28px] font-semibold md:text-[32px] lg:inline">
              fleeing Ukraine
            </h2>
          </div>
          <div className="mr-auto ml-auto w-max cursor-pointer transition duration-200 active:bg-white active:text-black rounded-md border px-4 py-2 text-[14px] font-semibold">
            Learn more
          </div>
        </div>
        <div></div>
      </div>
      
    </div>
  )
}

export default Hero
