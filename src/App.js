import React, { Component } from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Recommendations from './components/Recommendations';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Interests from './components/Interests';
import Hero from './components/Hero';
import Footer from './components/Footer';
import Spacer from './components/Spacer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Hero id="hero" />
        <About id="about" />
        <Spacer id="spacer" />
        <Projects id="projects" />
        <Interests id="interests" />
        <Contact id="contact" />
        <Skills id="skills" />
        <Recommendations id="recommendations" />
        <Footer/>
        </header>
      </div>
    );
  }
}

export default App;
