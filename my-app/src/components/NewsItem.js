import React, { Component } from "react";
import PropTypes from 'prop-types';

class NewsItem extends Component {


  constructor(props){
    super();
    console.log(props)
  }


  static propTypes = {
    newsData:PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string
    })
  };

 

  render() {
    console.log(this.props);
    const { title, description } = this.props.newsData;

    return (
      <div>
        <h1 className="test"> {title}</h1>
        <p>{this.props.description}</p> {description}
      </div>
    );
  }
}

export default NewsItem;


