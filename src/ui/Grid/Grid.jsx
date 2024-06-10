import React from 'react'
import './Grid.css'
import Button from '../Button/Button'
const Grid = ({ title, articles }) => {
  return (
    <div className="market-container">
      <div className="market-header">
        <h2 className="header">{title}</h2>
        <Button text="More from Markets" className="secbutton"/>
      </div>
      <div className="articles-container">
        <div className="main-article">
          <h3>{articles[0].title}</h3>
          <p>{articles[0].summary}</p>
          <span>{articles[0].readTime}</span>
        </div>
        <div className="side-articles">
          {articles.slice(1).map((article, index) => (
            <div key={index} className="side-article">
              <h4>{article.title}</h4>
              <p>{article.summary}</p>
              <span>{article.readTime}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Grid