import React from 'react'
import Image from 'next/image'

export const Card = ({ url, color }) => {
  return (
    <div className="card mr-4 mt-4">
      <div
        className="card__image h-[130px] w-[200px] rounded-t-md md:h-[200px] md:w-[290px] md:rounded-t-[15px] lg:h-[170px] lg:w-[250px]"
        style={{ background: `url(${url})`, backgroundSize: 'cover' }}
      ></div>
      <div
        className={`h-[130px] w-[200px] md:h-[200px] md:w-[290px] lg:h-[170px] lg:w-[250px] ${color} rounded-b-md md:rounded-b-[15px]`}
      ></div>
    </div>
  )
}
