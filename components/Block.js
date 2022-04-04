import React from 'react'

export const Block = ({ url, text, button }) => {
  return (
    <div className="md:flex-1 ">
      <div
        className="container mb-9 flex h-[60vw] flex-col rounded-[15px] p-9 md:h-[40vw] "
        style={{
          background: `url(${url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
        }}
      >
        <h2 className="w-[210px] text-[29px] font-bold leading-[1.1] text-white lg:w-[240px] lg:text-[34px] ">
          {text}
        </h2>

        <div className="bg- mt-9 w-max cursor-pointer rounded-md bg-white py-3 px-5 text-[16px] font-semibold text-black ">
          <h2 className="">{button}</h2>
        </div>
      </div>
    </div>
  )
}
