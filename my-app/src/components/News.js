import React, { Component } from 'react'
import NewsItem from './NewsItem';

export default class News extends Component {

  render() {

    const title = "React-js";
    const description = "React description";

    return (
      <div>
        <NewsItem title={title} description={description} />
        <NewsItem />
        <NewsItem />
      </div>
    )
  }
}
