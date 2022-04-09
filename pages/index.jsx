import Head from 'next/head'
import { useState } from 'react'
import { useEffect } from 'react'
import Banner from '../components/Banner'
import { Blocks } from '../components/Blocks'
import { Cards } from '../components/Cards'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import MediumCards from '../components/MediumCards'
import Footer from '../components/Footer'

export default function Home({ cardsData }) {
  const [searchInput, setSearchInput] = useState('')
  const [position, setPosition] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    const position = window.pageYOffset
    setPosition(position)
  }

  return (
    <div className="app w-100vw absolute right-0 left-0 mr-auto ml-auto h-max max-w-[3000px] ">
      <Head>
        <title>Kachi's Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`absolute top-[0px] left-0 right-0 -z-10 ml-0 ${
          position && searchInput
            ? 'h-[1190px] md:h-[1400px] lg:h-[1270px]'
            : 'h-[800px]  md:h-[950px] lg:h-[850px]'
        }  w-[100%] bg-black text-white`}
      />

      <Navbar
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        position={position}
        handleScroll={handleScroll}
      />
      <Hero />
      <Banner />

      <main className="ml-auto mr-auto w-[90%] ">
        {/* <section className="mt-16 ">
          <h2 className="text-[25px] font-medium ">
            Inspiration for your next trip
          </h2>
          <div className="row">
            <Cards />
          </div>
        </section> */}

        <section>
          <h2 className="pt-20 text-4xl font-medium">Live anywhere</h2>
        </section>
        <div className="-ml-3 flex space-x-3 overflow-scroll p-3 scrollbar-hide">
          {cardsData?.map(({ img, title }) => (
            <MediumCards key={img} img={img} title={title} />
          ))}
        </div>
        <aside className="mt-16">
          <h1 className="text-4xl font-medium ">Discover Airbnb Experiences</h1>
          <Blocks />
        </aside>
      </main>
      <section className="mt-20 md:mb-[160px] flex  flex-col  md:float-right md:block md:w-[95%]">
        <div className="md: ml-auto mr-auto flex w-[90%] flex-col md:float-left md:ml-0 md:mr-[20px] md:w-max">
          <h2
            className="w-[240px] text-[34px] font-[500] leading-[1] lg:w-[300px] lg:text-[45px]"
            style={{ color: '#222222' }}
          >
            Shop Airbnb gift cards
          </h2>
          <button
            className="mt-9 w-max cursor-pointer rounded-lg py-3 px-5 text-white hover:shadow-xl lg:text-[20px]"
            style={{ background: '#222222' }}
          >
            Learn more
          </button>
        </div>
        <div
          className="-z-50 mr-0 h-[55vw] md:absolute md:right-0 md:h-[30vw] md:w-[70vw] xl:h-[20vw] xl:w-[50vw]"
          style={{
            background: `url(https://a0.muscache.com/im/pictures/204eea7c-fd71-4316-b056-7e2cc664351d.jpg)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            // backgroundPosition: 'center center',
          }}
        ></div>
      </section>
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const cardsData = await fetch('https://links.papareact.com/zp1').then((res) =>
    res.json()
  )

  return {
    props: {
      cardsData,
    },
  }
}
