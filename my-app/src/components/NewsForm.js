import React, { Component } from 'react';

class NewsForm extends Component {

    constructor(props) {
        super(props);
       this.addButton = this.addButton.bind(this); 
    }

    // addButton() {
    //     console.log('hello');
    //     this.props.addNews();
    // };

    addButton = () => {
        console.log('hello');
        this.props.addNews();
    };

    render() {
        return (
            <div>
                <button onClick={this.addButton}>Add</button> 
                {/*  this.addButton.bind(this) */}
                {/*  () => this.addButton()    */}
            </div>
        );
    }
}

export default NewsForm;