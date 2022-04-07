import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import {
  SearchIcon,
  MenuIcon,
  GlobeAltIcon,
  UserCircleIcon,
  UsersIcon,
} from '@heroicons/react/solid'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import { DateRangePicker } from 'react-date-range'

function Navbar({ searchInput, setSearchInput, position }) {
  const [el1hover, setEl1Hover] = useState(false)
  const [el2hover, setEl2Hover] = useState(false)
  const [el3hover, setEl3Hover] = useState(false)
  const [el1click, setEl1Click] = useState(true)
  const [el2click, setEl2Click] = useState(false)
  const [el3click, setEl3Click] = useState(false)
  const [lel1click, setLEl1click] = useState(false)
  const [lel2click, setLEl2click] = useState(false)
  const [lel3click, setLEl3click] = useState(false)
  const [lel4click, setLEl4click] = useState(false)

  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [noOfGuests, setNoOfGuests] = useState(1)

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  }

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  return (
    <>
      <nav
        className={`navbar sticky top-0 z-50 p-5 px-9 shadow-md   md:flex ${
          position ? 'lg:justify-between' : 'md:justify-between'
        }${position ? 'h-[90px] bg-white text-black' : 'bg-black lg:h-20'}`}
      >
        <div
          className={`"navbar__logo relative my-auto hidden  h-10 items-center transition duration-200  ease-in-out  md:inline-block md:w-40 lg:flex  lg:pl-9 ${
            position ? 'md:w-[10%] lg:w-[35%]' : 'lg:w-[50%]'
          } `}
        >
          <svg
            className="cursor-pointer"
            width="30"
            height="35"
            fill={`${position ? 'rgb(255, 56, 92)' : 'white'}`}
            style={{ display: 'block' }}
          >
            <path
              className="cursor-pointer"
              d="M29.24 22.68c-.16-.39-.31-.8-.47-1.15l-.74-1.67-.03-.03c-2.2-4.8-4.55-9.68-7.04-14.48l-.1-.2c-.25-.47-.5-.99-.76-1.47-.32-.57-.63-1.18-1.14-1.76a5.3 5.3 0 00-8.2 0c-.47.58-.82 1.19-1.14 1.76-.25.52-.5 1.03-.76 1.5l-.1.2c-2.45 4.8-4.84 9.68-7.04 14.48l-.06.06c-.22.52-.48 1.06-.73 1.64-.16.35-.32.73-.48 1.15a6.8 6.8 0 007.2 9.23 8.38 8.38 0 003.18-1.1c1.3-.73 2.55-1.79 3.95-3.32 1.4 1.53 2.68 2.59 3.95 3.33A8.38 8.38 0 0022.75 32a6.79 6.79 0 006.75-5.83 5.94 5.94 0 00-.26-3.5zm-14.36 1.66c-1.72-2.2-2.84-4.22-3.22-5.95a5.2 5.2 0 01-.1-1.96c.07-.51.26-.96.52-1.34.6-.87 1.65-1.41 2.8-1.41a3.3 3.3 0 012.8 1.4c.26.4.45.84.51 1.35.1.58.06 1.25-.1 1.96-.38 1.7-1.5 3.74-3.21 5.95zm12.74 1.48a4.76 4.76 0 01-2.9 3.75c-.76.32-1.6.41-2.42.32-.8-.1-1.6-.36-2.42-.84a15.64 15.64 0 01-3.63-3.1c2.1-2.6 3.37-4.97 3.85-7.08.23-1 .26-1.9.16-2.73a5.53 5.53 0 00-.86-2.2 5.36 5.36 0 00-4.49-2.28c-1.85 0-3.5.86-4.5 2.27a5.18 5.18 0 00-.85 2.21c-.13.84-.1 1.77.16 2.73.48 2.11 1.78 4.51 3.85 7.1a14.33 14.33 0 01-3.63 3.12c-.83.48-1.62.73-2.42.83a4.76 4.76 0 01-5.32-4.07c-.1-.8-.03-1.6.29-2.5.1-.32.25-.64.41-1.02.22-.52.48-1.06.73-1.6l.04-.07c2.16-4.77 4.52-9.64 6.97-14.41l.1-.2c.25-.48.5-.99.76-1.47.26-.51.54-1 .9-1.4a3.32 3.32 0 015.09 0c.35.4.64.89.9 1.4.25.48.5 1 .76 1.47l.1.2c2.44 4.77 4.8 9.64 7 14.41l.03.03c.26.52.48 1.1.73 1.6.16.39.32.7.42 1.03.19.9.29 1.7.19 2.5z"
            ></path>
          </svg>
          <h4
            className={`'lg:block ml-2 mb-[3px] hidden w-max cursor-pointer text-xl  font-semibold  lg:inline-block ${
              position ? 'hidden text-black' : 'block text-white '
            }`}
          >
            airbnb
          </h4>
        </div>

        <div
          className={`navbar__searchbar flex cursor-pointer  items-center justify-center rounded-full border bg-gray-200 py-2 md:hidden`}
        >
          <SearchIcon className="h-7 p-1 text-red-500" />
          <input
            type="text"
            value={searchInput}
            className="bg-gray-200 outline-none"
            placeholder="Where are you going?"
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>

        {position ? (
          <div className="nav__mdSearchBar hidden h-[50px]  cursor-pointer items-center rounded-full border py-[10px] shadow-sm md:flex md:py-[10px] md:px-2 lg:py-[10px]">
            <input
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="w-[250px] pl-2 outline-none"
              placeholder="Start your search"
            />
            <SearchIcon className="h-8 rounded-full bg-[#ff385c] px-2 py-2 text-white" />
          </div>
        ) : (
          <div className="nav__midSection left-0 hidden w-[100%] pt-0 text-white   md:absolute md:top-[88px] md:block md:bg-black lg:relative lg:top-0 lg:bg-black lg:py-0">
            <div className="ml-auto mr-auto flex justify-center  transition duration-150 ease-in-out md:w-[450px] lg:bg-black">
              <div
                className="ml-auto mr-auto cursor-pointer "
                onMouseEnter={() => setEl1Hover(true)}
                onMouseLeave={() => setEl1Hover(false)}
                onClick={() => {
                  setEl1Click(true)
                  setEl2Click(false)
                  setEl3Click(false)
                }}
              >
                <h3 className={`py-2`}>Places to stay</h3>
                <div
                  className={`line  ${
                    el1click ? '--active' : ''
                  } ml-auto mr-auto w-1 border-b-2  ${
                    el1hover ? 'block ' : 'hidden'
                  }`}
                />
              </div>
              <div
                className="ml-auto mr-auto cursor-pointer"
                onMouseEnter={() => setEl2Hover(true)}
                onMouseLeave={() => setEl2Hover(false)}
                onClick={() => {
                  setEl1Click(false)
                  setEl2Click(true)
                  setEl3Click(false)
                }}
              >
                <h3 className="ml-auto mr-auto py-2  text-[16px]">
                  Experiences
                </h3>
                <div
                  className={`line ${
                    el2click ? '--active' : ''
                  } ml-auto mr-auto w-1 border-b-2 transition delay-200 ease-in ${
                    el2hover ? 'block ' : 'hidden '
                  }`}
                />
              </div>
              <div
                className="cursor-poiner ml-auto mr-auto "
                onMouseEnter={() => setEl3Hover(true)}
                onMouseLeave={() => setEl3Hover(false)}
                onClick={() => {
                  setEl1Click(false)
                  setEl2Click(false)
                  setEl3Click(true)
                }}
              >
                <h3 className="ml-auto mr-auto cursor-pointer py-2 lg:text-[16px]">
                  Online Experiences
                </h3>
                <div
                  className={`line ${
                    el3click ? '--active' : ''
                  } ml-auto mr-auto w-1 border-b-2 transition delay-200 ease-in ${
                    el3hover ? 'block ' : 'hidden '
                  }`}
                />
              </div>
            </div>
            {/* //start */}
          </div>
        )}

        <div
          className={`"nav__userSection  hidden items-center text-white md:flex ${
            position
              ? 'navbar__flexItems text-black lg:w-[45%] lg:justify-end'
              : ' md:ml-[50%] lg:ml-0 lg:w-[50%]'
          }`}
        >
          <h3
            className={`min-w-[150px] cursor-pointer rounded-full px-4 py-3  ${
              position
                ? 'cursor-pointer text-black hover:bg-black/[0.07]'
                : 'cursor-pointer hover:bg-white/[0.17]'
            }`}
          >
            Become a Host
          </h3>
          <GlobeAltIcon
            className={`w-15 h-11 cursor-pointer rounded-full px-4 py-3  ${
              position
                ? 'text-black hover:bg-black/[0.07]'
                : 'hover:bg-white/[0.17]'
            }`}
          />
          <div className="ml-4 flex cursor-pointer items-center justify-between rounded-full bg-gray-100 px-1 py-[2px]">
            <MenuIcon className="h-6 px-2 text-gray-600" />
            <UserCircleIcon className="h-10 text-gray-500 " />
          </div>
        </div>
      </nav>
      <div
        className={`mt-20 ml-auto mr-auto w-[92%] rounded-full bg-black bg-white/[.89] md:mt-[50px]   lg:mt-5 lg:w-[75%]  ${
          position ? 'hidden' : 'hidden md:flex'
        }`}
      >
        <div
          className={`click grid w-[23.3%] cursor-pointer rounded-full py-3 pr-5 pl-8 hover:bg-black/[.04] ${
            lel1click ? '--click shadow-lg hover:bg-white' : ''
          }`}
          onClick={() => {
            setLEl1click(true)
            setLEl2click(false)
            setLEl3click(false)
            setLEl4click(false)
            setSearchInput(' ')
          }}
        >
          <h3 className="text-sm text-black">Location</h3>
          <input
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className={`focus:pl-none  truncate rounded-lg border-slate-500  bg-inherit pl-2 text-black/[.6] outline-none focus:w-[120px]`}
            placeholder="Where are you going?"
          />
        </div>
        <div className="line my-5 border border-l-black/[.2]" />
        <div
          className={`grid w-[23.3%] cursor-pointer rounded-full py-3 pl-5 hover:bg-black/[.04] ${
            lel2click ? '--click shadow-lg hover:bg-white' : ''
          }`}
          onClick={() => {
            setLEl1click(false)
            setLEl2click(true)
            setLEl3click(false)
            setLEl4click(false)
            setSearchInput(' ')
          }}
        >
          <h3 className="text-sm text-black">Check-in</h3>
          <h3 className="text-black/[.6]">Add dates</h3>
        </div>
        <div className="line my-5 border border-l-black/[.2]" />
        <div
          className={`grid w-[23.3%] cursor-pointer rounded-full py-3 pl-5 hover:bg-black/[.04] ${
            lel3click ? '--click shadow-lg hover:bg-white' : ''
          }`}
          onClick={() => {
            setLEl1click(false)
            setLEl2click(false)
            setLEl3click(true)
            setLEl4click(false)
          }}
        >
          <h3 className="text-sm text-black">Check out</h3>
          <h3 className="text-black/[.6]">Add dates</h3>
        </div>
        <div className="line my-5 border border-l-black/[.2]" />

        <div
          className={`flex w-[30%] items-center justify-between rounded-full hover:bg-black/[.04] ${
            lel4click ? '--click shadow-lg hover:bg-white' : ''
          }`}
          onClick={() => {
            setLEl1click(false)
            setLEl2click(false)
            setLEl3click(false)
            setLEl4click(true)
          }}
        >
          <div className="grid w-[100%] cursor-pointer  py-3 pl-5 ">
            <h3 className="text-sm text-black">Guests</h3>
            <h3 className="text-black/[.6]">Add guests</h3>
          </div>
          <SearchIcon className="cursor-pointer  mr-2 h-[50px] rounded-full bg-gradient-to-r from-[#FF385C] via-[#E31C5F] to-[#BD1E59] px-4 py-3" />
        </div>
        {/* //end */}
      </div>
      {searchInput && (
        <div
          className={`ml-auto mr-auto flex  w-[100%] flex-col justify-center ${
            position ? 'sticky top-[80px] z-50' : 'pt-0'
          }`}
        >
          <div className="w-80% flex justify-center">
            <DateRangePicker
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={['#fd5b61']}
              onChange={handleSelect}
            />
          </div>
          <div className="mr-auto ml-auto hidden w-[50%] items-center border-b  bg-white p-4 pb-4 md:flex md:w-[558px]">
            <h2 className=" flex-grow text-lg font-semibold">
              Number of Guests
            </h2>
            <UsersIcon className="h-5" />
            <input
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              min={1}
              type="number"
              className="w-12 text-red-400 outline-none"
              pl-2
            />
          </div>
          <div className="mb-2 ml-auto mr-auto flex w-[333px] rounded-b-md border-none bg-white p-2 md:w-[558px]">
            <button className="flex-grow text-gray-500 ">Search</button>
            <button
              className="flex-grow"
              style={{ color: 'rgb(255, 56, 92)' }}
              onClick={() => setSearchInput('')}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
