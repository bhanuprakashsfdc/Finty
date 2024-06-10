import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import MiniFooter from './components/MiniFooter/MiniFooter'
import DisplaySection from './components/DisplaySection/DisplaySection'
import LatestStories from './components/LatestStories/LatestStories'
import Nifty50list from './components/Nifty50list/Nifty50list'
import PopularStocks from './components/PopularStocks/PopularStocks'
import TrendingStories from './components/TrendingStories/TrendingStories'
import Homepage from './layout/Homepage/Homepage'
import MarketScroller from './components/MarketScroller/MarketScroller'
function App() {

  return (
    <>
      <Header />
      <MarketScroller />
      <Homepage />
      <TrendingStories />
      <PopularStocks />
      <Nifty50list />
      <LatestStories />
      <DisplaySection />
      <MiniFooter />
      <Footer />
    </>
  )
}

export default App
