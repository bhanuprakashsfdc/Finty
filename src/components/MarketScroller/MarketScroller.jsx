import React from 'react'
import './MarketScroller.css'
import Scroller from '../../ui/Scroller/Scroller'
import Ticker from '../../ui/ticker/ticker'
const MarketScroller = () => {
    const items = [
        { name: "AAPL", price: "$150.00", percentChange: "0.5", direction: "up" },
        { name: "GOOGL", price: "$2729.34", percentChange: "1.2", direction: "up" },
        { name: "MSFT", price: "$299.76", percentChange: "-0.8", direction: "down" },
        { name: "CRM", price: "$299.76", percentChange: "-0.8", direction: "down" },
        { name: "NVDIA", price: "$299.76", percentChange: "-0.8", direction: "down" },
        { name: "TSLA", price: "$299.76", percentChange: "-0.8", direction: "down" },
        { name: "SAP", price: "$299.76", percentChange: "-0.8", direction: "down" },
        // Add more stocks as needed
      ];

  return (
    <div className='MarketScroller'>
       <div className='livetext'>
            <button className='live'>Live</button>
        </div>
        <div className='scroller'>
            <Scroller items={items} />
        </div>
        <button> View Market Dashboard</button>
    </div>
  )
}

export default MarketScroller