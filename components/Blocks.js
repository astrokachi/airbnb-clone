import React from 'react'
import { Block } from './Block'

export const Blocks = () => {
  return (
    <div className="block md:flex mt-5 md:justify-around gap-6">
      <Block
        url="https://a0.muscache.com/im/pictures/35612883-8e4c-440a-a768-ca7f268bd294.jpg?im_w=320"
        text="Things to do on your trip"
        button="Experiences"
      ></Block>
      <Block
        url="https://a0.muscache.com/im/pictures/aec597d9-9c5c-4746-965c-d3e1643299f7.jpg?im_w=320"
        text="Things to do from home"
        button="Online expeiences"
      ></Block>
    </div>
  )
}
