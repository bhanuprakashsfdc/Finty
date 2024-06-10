import React from 'react'
import './Homepage.css'
import MarketsSection from '../MarketsSection/MarketsSection'

const Homepage = () => {
 return (
    <div className ="homecon">
      <div className = "item3">
        <MarketsSection />
        <MarketsSection />
        <MarketsSection />
      </div>
      <div className = "item4">
         <MarketsSection />
         <MarketsSection />
         <MarketsSection />
      </div>
      
    </div>
  )
}

export default Homepage