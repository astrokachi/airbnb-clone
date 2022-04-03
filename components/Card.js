import React from 'react'
import Image from 'next/image'

export const Card = ({ url, color }) => {
  return (
    <div className="card mr-4 mt-4">
      <div
        className="card__image lg:h-[14vw] lg:w-[19vw] md:h-[17vw] h-[30vw] w-[40vw] md:w-[25vw] rounded-t-[12px] "
        style={{ background: `url(${url})`, backgroundSize: 'cover' }}
      ></div>
      <div
        className={`lg:h-[13vw] lg:w-[19vw] md:h-[17vw] h-[30vw] w-[40vw] md:w-[25vw] ${color}  rounded-b-[12px]`}
      ></div>
    </div>
  )
}
