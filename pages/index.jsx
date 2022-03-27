import Head from 'next/head'
import Banner from '../components/Banner'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div className="">
      <Head>
        <title>Kachi's Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Banner />
    </div>
  )
}

export default Home
