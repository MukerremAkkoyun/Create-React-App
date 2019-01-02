import React, { Component } from 'react'
import NewsItem from './NewsItem';

export default class News extends Component {

  render() {

    const elements =  this.props.news.map( news =>  <NewsItem title={news.title} description={news.description} />);

    return (
      <div>
          {
            elements
          }
      </div>
    )
  }
}
