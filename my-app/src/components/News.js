import React, { Component } from 'react'
import NewsItem from './NewsItem';

export default class News extends Component {

  render() {

    const News = [{
        title : "title 1",
        description : "description 1"
    },
    {
        title : "title 2",
        description : "description 2"
    },
    {
        title : "title 3",
        description : "description 3"
    }];

    return (
      <div>
        <NewsItem title={News[0].title} description={News[0].description} />
        <NewsItem title={News[1].title} description={News[1].description} />
        <NewsItem title={News[2].title} description={News[2].description} />
      </div>
    )
  }
}
