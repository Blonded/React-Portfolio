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
        <img alt="clouds" className="clouds" src={bg_img} width="1450px" />
        </div>
          
          <p>
            Edit <code>src/App.js</code> and save to reload.

          </p>
        
        </header>
      </div>
    );
  }
}

export default App;
