import React from 'react'
import './DisplaySection.css'
import SectionBox from '../../ui/SectionBox/SectionBox'

const DisplaySection = () => {
    const secdata = ["Premium", "Opinion", "News", "Market", "Politics", "Companies", "Money", "Sports", "Mutual Fund", "Industry", "Technology", "Filmy"];
    const toolsdata = ["IFSC Code Finder", "Income Tax Calculator", "SIP Calculator", "Home Loan EMI Calculator", "Car Loan EMI", "NPS Calculator"];
    const datapages = ["Market Dashboard", "Indices", "Top Gainer", "Mutual Funds", "Gold Price", "Silver Price", "Fuel Price"];
  return (
    <div className='DisplaySection'>
    <SectionBox headertext="Section" items={secdata}/>
    <SectionBox headertext="Tools" items={toolsdata}/>
    <SectionBox headertext="Data Pages" items={datapages}/>
    </div>

  )
}

export default DisplaySection