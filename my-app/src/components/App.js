import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import News from './News';

class App extends Component {
  render() {

    const news = [{
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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <News news={news} />
        </header>
      </div>
    );
  }
}

export default App;
