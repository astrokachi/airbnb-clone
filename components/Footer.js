import React from 'react'

const Footer = () => {
  return (
    <div className="mr-auto ml-auto grid grid-cols-1 space-y-10 space-x-5 bg-[#eeeeee] px-10 md:mt-[370px] md:grid-cols-4 md:px-10 lg:px-20">
      <div className="my-10 space-y-4 text-[#222222]">
        <h5 className="font-bold">Support</h5>
        <p>Help center</p>
        <p>Safety information</p>
        <p>Cancellation options</p>
        <p>Our COVID-19 Response</p>
        <p>Supporting people with disabilities</p>
        <p>Report a neighbourhood concern</p>
      </div>
      <div className="space-y-4 text-[#222222]">
        <h5 className="font-bold">Community</h5>
        <p>Airbnb.org</p>
        <p>Suppport Afghan refugees</p>
        <p>combating discrimination</p>
      </div>
      <div className="space-y-4 text-[#222222]">
        <h5 className="font-bold">Hosting</h5>
        <p>Try hosting</p>
        <p>Visit our community forum</p>
        <p>AirCover: protection for Hosts</p>
        <p>How to host responsibly</p>
        <p>Explore hosting resources</p>
      </div>
      <div className="space-y-4 text-[#222222]">
        <h5 className="font-bold">About</h5>
        <p>Newsroom</p>
        <p>Careers</p>
        <p>Learn about new features</p>
        <p>Investors</p>
        <p>Letter from our founders</p>
        <p>Airbnb Luxe</p>
      </div>
    </div>
  )
}

export default Footer
