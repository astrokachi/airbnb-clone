import React, { useState, useEffect } from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import { useRouter } from 'next/dist/client/router'
import { format } from 'date-fns'
import InfoCard from '../components/InfoCard'

const Search = ({ searchResults }) => {
  const [searchInput, setSearchInput] = useState('')
  const [position, setPosition] = useState(0)
  const router = useRouter()

  const { location, startDate, endDate, noOfGuests } = router.query

  const formattedEndDate = format(new Date(endDate), 'dd MMMM yy')
  const formattedStartDate = format(new Date(startDate), 'dd MMMM yy')
  const range = `${formattedStartDate}-${formattedEndDate}`

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => {
    const position = window.pageYOffset
    setPosition(position)
    // console.log(position)
  }
  return (
    <div className="">
      <Nav
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        position
        placeholder={`${location} | ${range} | ${noOfGuests}`}
      />
      <main className="flex">
        <section className="flex-grow px-6 pt-14">
          <p className="xs">
            300+ stays - {range} - for {noOfGuests} guest(s){' '}
          </p>

          <h1 className="mt-2 mb-6 text-2xl font-semibold">
            Stays in {location}
          </h1>

          <div className="mb-5 hidden space-x-3 whitespace-nowrap text-gray-800 lg:inline-flex">
            <p className="button">Cancellation flexibility</p>
            <p className="button">Type of Place</p>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

          <div className="flex flex-col">
            {searchResults.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div>
        </section>
      </main>
      <Footer margin="mt-[0px]" />
    </div>
  )
}

export default Search

export async function getServerSideProps() {
  const searchResults = await fetch('https://links.papareact.com/isz').then(
    (res) => res.json()
  )

  return {
    props: {
      searchResults,
    },
  }
}
