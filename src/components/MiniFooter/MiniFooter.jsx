import React from 'react'
import './MiniFooter.css'
import fb from '../../assets/img/fb.png'
import x from '../../assets/img/x.png'
import yt from '../../assets/img/yt.png'

const MiniFooter = () => {
  return (
    <div className='MiniFooter'>
        <div className='mfleftnav'>
            <p className='mfleftnavtext'> About Us</p>
            <p className='mfleftnavtext'> Contact Us</p>
            <p className='mfleftnavtext'> Term of Use</p>
            <p className='mfleftnavtext'> Privacy Policy</p>
            <p className='mfleftnavtext'> RSS</p>
        </div>
        <div className='mfrightnav'>
            <img src={fb} alt="fb" className="mf-icon"/>
            <img src={x} alt="x" className="mf-icon"/>
            <img src={yt} alt="yt" className="mf-icon"/>
        </div>
    </div>
  )
}

export default MiniFooter