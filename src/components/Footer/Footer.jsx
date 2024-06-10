import React from 'react'
import './Footer.css'
import { WEBSITE_NAME } from '../../constants/constants';

const Footer = () => {
  return (
    <div>
        <p className="footer">Copyright © {new Date().getFullYear()} { WEBSITE_NAME }.All Rights Reserved</p>
    </div>
  )
}

export default Footer