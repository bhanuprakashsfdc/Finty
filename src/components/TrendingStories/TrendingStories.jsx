import React from 'react'
import './TrendingStories.css'
import TrendsJson from '../../data/trendingstories.json'
const TrendingStories = () => {
  return (
    <div className="trendingstories">
        <h2 className="header">{TrendsJson.header}</h2>
        <div className='lsdata'>
            {TrendsJson.content.map((item, index) => (
            <span className='lsdatavariable' key={index}>{item} Share Price</span>
            ))}
        </div>
    </div>
  )
}

export default TrendingStories