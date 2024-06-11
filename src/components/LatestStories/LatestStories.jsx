import React from 'react'
import './LatestStories.css'
import LatestStoriesjson from '../../data/lateststories.json'
const LatestStories = () => {
  return (
    <div className="lateststories">
        <h2 className="header">{LatestStoriesjson.header}</h2>
        <div className='lsdata'>
            {LatestStoriesjson.content.map((item, index) => (
              <span className='lsdatavariable' key={index}>{item}</span>
            ))}
        </div>
    </div>
  )
}

export default LatestStories