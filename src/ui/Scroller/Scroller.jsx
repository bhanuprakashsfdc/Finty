import React, { useRef }  from 'react';
import './Scroller.css'; // Importing the CSS file for styling

const Scroller = ({ items }) => {
    const scrollRef = useRef(null);

    // Function to scroll left
    const scrollLeft = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
      }
    };
  
    // Function to scroll right
    const scrollRight = () => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
      }
    };
  return (
        <div className="scroller-wrapper">
            <div ref={scrollRef} className="stock-scroller-container">
                {items.map((item, index) => (
                <div key={index} className="stock-scroller-item">
                    <span className="stock-name">{item.name}</span>
                    <span className="stock-price">{item.price}</span>
                    <span className={`stock-change ${item.direction === 'up' ? 'up' : 'down'}`}>
                    {item.percentChange}%
                    {item.direction === 'up' ? '↑' : '↓'}
                    </span>
                </div>
                ))}
            </div>
        </div>
  );
};

export default Scroller;
