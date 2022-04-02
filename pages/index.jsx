import { data } from 'autoprefixer'
import Head from 'next/head'
import { useState } from 'react'
import { useEffect } from 'react'
import Banner from '../components/Banner'
import { Blocks } from '../components/Blocks'
import { Cards } from '../components/Cards'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'

export default function Home() {
  const [longitude, setLongitude] = useState('')
  const [latitude, setLatitude] = useState('')
  const [cities, setCities] = useState([])

  // useEffect(() => {

  // })

  return (
    <div className="app w-100vw h-max">
      <Head>
        <title>Kachi's Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="absolute top-[0px] -z-10 ml-0 h-[1100px] w-[100%] bg-black text-white lg:h-[950px]" />

      <Navbar />
      <Hero />
      <Banner />

      <main className="ml-auto mr-auto w-[90%] max-w-7xl">
        <section className="mt-16">
          <h2 className="text-[25px] font-medium ">
            Inspiration for your next trip
          </h2>
          <div className="row">
            <Cards />
          </div>
        </section>
        <aside className="mt-16">
          <h1 className="text-[25px] font-medium ">
            Discover Airbnb Experiences
          </h1>
          <Blocks/>
        </aside>
      </main>
    </div>
  )
}
