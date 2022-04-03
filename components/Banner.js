import React from 'react'
import Image from 'next/image'

const Banner = () => {
  return (
    <div className="banner mt-20">
      <div className="banner__imgCon relative ml-auto mr-auto h-[500px] w-[90%] rounded-md  md:h-[500px] lg:h-[550px] xl:h-[700]">
        <div className="banner__contentsCon absolute top-[65%] w-full px-3 text-center text-white  md:top-[70%]">
          <p className="banner__contents text-[28px] font-bold leading-[30px]">
            Let your curiosity do the booking
          </p>
          <button className="my-7 rounded-full bg-white px-4 py-3">
            <span className="banner__buttonSpan font-bold">I'm flexible</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner
