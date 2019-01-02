import React, { Component } from 'react'
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';
import NewsForm from './NewsForm';

export default class News extends Component {

  //StateFul
  static propTypes = {
    news: PropTypes.array.isRequired
  };

    static propTypes = {
    newsData:PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string
    })
  };


 
  render() {

    const elements = this.props.news.map(news =>
      <NewsItem
        key={news.id}
        // title={news.title}
        // description={news.description}
        newsData = {news}  />);

    return (
      <div>

        {this.props.name}
        {elements}
        <NewsForm />
      </div>
    )
  }
}


//Stateless
News.propTypes = {
  name: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired
}

