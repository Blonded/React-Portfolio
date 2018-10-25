import React, { Component } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Hero from './components/Hero';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Hero id="hero" />
        <About id="about" />
        <Contact id="contact" />
        <Projects id="projects" />
        <Skills id="skills" />
        </header>
      </div>
    );
  }
}

export default App;
