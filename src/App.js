import React, { Component } from 'react';
import './App.css';
import bg_img from './clouds.jpg';
import About from './components/About';
import Contact from './components/Contact';
import Location from './components/Location';
import Projects from './components/Projects';
import Skills from './components/Skills';

class App extends Component {
  render() {
    document.body.style.backgroundImage = `url("https://unsplash.com/photos/MF9Wy1NA55I")`;
    return (
      <div className="App">
        <header className="App-header">
        <div className="Background-img">
        <img alt="clouds" className="clouds" src={bg_img} width="1450px" />
        
        </div>
        </header>
      </div>
    );
  }
}

export default App;
