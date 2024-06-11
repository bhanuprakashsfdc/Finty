import React, { useState } from 'react';
import './MiniNav.css';

import MegaMenu from '../../ui/MegaMenu/MegaMenu';

const MiniNav = () => {
    const [active, setActive] = useState('');
    const [showMegaMenu, setShowMegaMenu] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const handleClick = (name) => () => {
      setActive(name);
      setMobileMenuOpen(false); // Close mobile menu when a link is clicked
    };

    const toggleMobileMenu = () => {
      setMobileMenuOpen(!mobileMenuOpen);
    };

    // Data for links and blog posts for MegaMenu
    const links = ["Link 1", "Link 2", "Link 3", "Link 4", "Link 5", "Link 6"];
    const blogPosts = [
        { title: "Blog Post 1", summary: "Summary of blog post 1", image: "/path-to-image-1.jpg" },
        { title: "Blog Post 2", summary: "Summary of blog post 2", image: "/path-to-image-2.jpg" },
        // Add more blog posts as needed...
    ];

  return (
    <div>
        <nav className="navbar">
        <div className="menu-toggle" onClick={toggleMobileMenu}>
        </div>
        <div className={`navbar-links ${mobileMenuOpen ? 'active' : ''}`}>
          <a href="/" className={`nav-item ${active === 'home' ? 'active' : ''}`} onClick={handleClick('home')}>Home</a>
          {/* Additional links... */}
          <div 
            className="nav-item" 
            onMouseOver={() => setShowMegaMenu(true)} 
            onMouseOut={() => setShowMegaMenu(false)}
            >
            <a href="/news">News</a>
            {showMegaMenu && <MegaMenu links={links} blogPosts={blogPosts} />}
          </div>
          <a href="/companies" className={`nav-item ${active === 'companies' ? 'active' : ''}`} onClick={handleClick('companies')}>Companies</a>
          <a href="/money" className={`nav-item ${active === 'money' ? 'active' : ''}`} onClick={handleClick('money')}>Money</a>
          <a href="/incharts" className={`nav-item ${active === 'incharts' ? 'active' : ''}`} onClick={handleClick('incharts')}>In Charts</a>
          <a href="/industry" className={`nav-item ${active === 'industry' ? 'active' : ''}`} onClick={handleClick('industry')}>Industry</a>
          <a href="/technology" className={`nav-item ${active === 'technology' ? 'active' : ''}`} onClick={handleClick('technology')}>Technology</a>
          <a href="/politics" className={`nav-item ${active === 'politics' ? 'active' : ''}`} onClick={handleClick('politics')}>Politics</a>
          <a href="/more" className={`nav-item ${active === 'more' ? 'active' : ''}`} onClick={handleClick('more')}>More</a>
          {/* More links... */}
        </div>
        </nav>
    </div>
  )
}

export default MiniNav;
