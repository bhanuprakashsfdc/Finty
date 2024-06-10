import React from 'react'
import './MarketsSection.css'
import Grid from '../../ui/Grid/Grid'

const MarketsSection = () => {
    const articles = [
        {
          title: 'Sensex Today Live Updates : Sensex, Nifty trade muted after record high open',
          summary: 'Fills net bought ₹4,391 crore, and DIIs net sold ₹1,290 crore worth of equities on 7 June, per provisional data...',
          readTime: '11 MIN READ • 10:55 AM IST'
        },
        {
          title: 'Sensex, Nifty 50 hit record high after PM Narendra Modi takes oath',
          summary: 'Market responds positively...',
          readTime: '3 MIN READ • 10:53 AM IST'
        },
        {
          title: 'Gold prices dip on strong US dollar as China pauses buying yellow metal',
          summary: 'Short term fluctuation noticed...',
          readTime: '2 MIN READ • 10:33 AM IST'
        },
        {
          title: 'The AI hype is real. Top 4 smallcap stocks poised for explosive growth',
          summary: 'Investors are turning their attention to smallcap stocks...',
          readTime: '6 MIN READ • 10:21 AM IST'
        }
      ];

  return (
    <div className='Markes'>
      <Grid title="Markets" articles={articles}/>
    </div>
  )
}

export default MarketsSection