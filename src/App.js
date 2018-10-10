import React, { Component } from 'react';
import './App.css';
import bg_img from './clouds.jpg';

class App extends Component {
  render() {
    document.body.style.backgroundImage = `url("https://unsplash.com/photos/MF9Wy1NA55I")`;
    return (
      <div className="App">
        <header className="App-header">
        <div className="Background-img">
        <img alt="" className="" src={bg_img} width="1450px" />
        </div>
          
          <p>
            Edit <code>src/App.js</code> and save to reload.

          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
           WOW MY BRAINS
          </a>
        </header>
      </div>
    );
  }
}

export default App;
