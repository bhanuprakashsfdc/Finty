import React from 'react'
import './PopularStocks.css'
import PopularStocksJson from '../../data/popularstocks.json'
const PopularStocks = () => {
  return (
    <div>
    <h2 className="header">{PopularStocksJson.header}</h2>
    <div className='lsdata'>
        {PopularStocksJson.content.map((item, index) => (
          <span className='lsdatavariable' key={index}>{item} Share Price</span>
        ))}
    </div>
</div>
  )
}

export default PopularStocks