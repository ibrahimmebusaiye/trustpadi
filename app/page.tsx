import React from 'react'
import Image from 'next/image'
import Home from './Landingpage/Home'
import Header from './Component/Header'
import Footer from './Component/Footer'

const page = () => {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  )
}

export default page

