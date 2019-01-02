import React, { Component } from 'react'
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';

export default class News extends Component {

  //StateFul
  static propTypes = {
    news: PropTypes.array.isRequired
  };

  render() {

    const elements = this.props.news.map(news =>
      <NewsItem
        key={news.id}
        title={news.title}
        description={news.description} />);

    return (
      <div>

        {this.props.name}
        {elements}
      </div>
    )
  }
}


//Stateless
News.propTypes = {
  name: PropTypes.string
}
