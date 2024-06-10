import React from 'react'
import './Header.css'
import menu from '../../assets/img/menu.png'
import search from '../../assets/img/search.png'

import Button from '../../ui/Button/Button'

const Header = () => {
    const handleClick = () => {
       console.log('Button clicked!');
    };

  return (
    <div className="headerview">
        <div className="nav-icons">
            <img src={menu} alt="menu" className="nav-icon"/>
            <img src={search} alt="search" className="nav-icon"/>
        </div>
        <div>
            <span className='title'> Finty</span>
        </div>
        <div>
            <span> E-Paper</span>
        </div>
        <div className="nav-buttons">
            <Button text="Subscribe" onClick={handleClick} className="pributton"/>
            <Button text="Sign in" onClick={handleClick} className="secbutton" />
        </div>
    </div>
  )
}

export default Header