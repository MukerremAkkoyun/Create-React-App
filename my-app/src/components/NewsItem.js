import React, { Component } from 'react';

class NewsItem extends Component {
    
    render(){

        console.log(this.props);
        const { title, description } = this.props;

        return(
            <div>
                <h1 className="test"> {title}</h1>
                <p>{this.props.description}</p>
                <label htmlFor ="test" ></label>
            </div>
        )
    }
}

export default NewsItem;