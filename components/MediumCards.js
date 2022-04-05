import Image from 'next/image'
import React from 'react'

const MediumCards = ({ img, title }) => {
  return (
    <div className="transform cursor-pointer transition duration-300 ease-out hover:scale-105 ">
      <div className="relative h-72 w-72">
        <Image src={img} layout="fill" className="rounded-xl"></Image>
      </div>
      <h3 className="mt-3 text-xl">{title}</h3>
    </div>
  )
}

export default MediumCards
