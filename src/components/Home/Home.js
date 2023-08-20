import React from 'react'
import Categories from '../Layouts/Categories'
import Banner from '../Home/Banner/Banner'
import DealSlider from '../Home/Dealsilder/DealSlider'
const Home = () => {
  return (
    <>
      <Categories/>
      <section>
        <Banner/>
        <DealSlider/>
      </section>
    </>
  )
}

export default Home
