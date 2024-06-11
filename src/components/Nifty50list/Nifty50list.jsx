import React from 'react'
import './Nifty50list.css'
import Nifty50 from '../../data/nifty50.json'
const Nifty50list = () => {
  return (
    <div className="nifty50">
        <h2 className="header">{Nifty50.header}</h2>
        <div className='lsdata'>
            {Nifty50.content.map((item, index) => (
              <span className='lsdatavariable' key={index}>{item} Share Price</span>
            ))}
        </div>
    </div>
  )
}

export default Nifty50list