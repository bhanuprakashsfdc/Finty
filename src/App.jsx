import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import MiniFooter from './components/MiniFooter/MiniFooter'
import DisplaySection from './components/DisplaySection/DisplaySection'
function App() {

  return (
    <>
      <Header />
      <DisplaySection />
      <MiniFooter />
      <Footer />
    </>
  )
}

export default App
