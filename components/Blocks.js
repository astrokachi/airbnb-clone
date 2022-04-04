import React from 'react'
import { Block } from './Block'

export const Blocks = () => {
  return (
    <div className="block md:flex mt-5 md:justify-around gap-6">
      <Block
        url="https://a0.muscache.com/im/pictures/0dcae177-2f65-4a15-b9e8-75d8c9b3cbe8.jpg?im_w=480"
        text="Things to do on your trip"
        button="Experiences"
      ></Block>
      <Block
        url="https://a0.muscache.com/im/pictures/4cef99fa-068f-4197-8b1d-e8e04ac0ceaf.jpg?im_w=480"
        text="Things to do from home"
        button="Online expeiences"
      ></Block>
    </div>
  )
}
