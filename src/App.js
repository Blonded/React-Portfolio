import React, { Component } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Interests from './components/Interests';
import Hero from './components/Hero';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Hero id="hero" />
        <About id="about" />
        <Interests id="interests" />
        <Contact id="contact" />
        <Projects id="projects" />
        <Skills id="skills" />
        <Footer/>
        </header>
      </div>
    );
  }
}

export default App;
