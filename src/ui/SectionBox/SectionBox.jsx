import React from 'react'
import './SectionBox.css'

const SectionBox = ({headertext, items}) => {
  // Function to chunk the items array into subarrays of size 3
  const chunkItems = (items, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < items.length; i += chunkSize) {
      chunks.push(items.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const itemChunks = chunkItems(items, 3);

  return (
    <div className="dynamic-grid">
      <h2 className="header">{headertext}</h2>
      {itemChunks.map((chunk, index) => (
        <div key={index} className="row">
          {chunk.map((item, idx) => (
            <div key={idx} className="column">
              {item}
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default SectionBox