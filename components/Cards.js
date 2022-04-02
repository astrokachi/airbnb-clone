import React from 'react'
import { Card } from './Card'

export const Cards = () => {
  return (
    <div className="cards flex relative md:justify-between lg:justify-evenly mb-2">
      <Card color='red' url='https://a0.muscache.com/im/pictures/ffde0c4b-1889-4d11-bb00-41411d34fdfc.jpg?im_w=240'/>
      <Card color='pink' url='https://a0.muscache.com/im/pictures/3a7b8005-28b8-48b8-8efa-0a6a00f7d5d8.jpg?im_w=240'/>
      <Card color='purple' url='https://a0.muscache.com/im/pictures/aff9e173-b551-44e4-80f3-bd9b9d632f8b.jpg?im_w=240'/>
      <Card color='peach' url='https://a0.muscache.com/im/pictures/ee86b8d6-b214-43f5-912c-3db2637a5724.jpg?im_w=240'/>
    </div>
  )
}
