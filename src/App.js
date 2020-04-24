import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Banner from './components/Banner';
import Blogs from './components/blogs';
import Contact from './components/contact';
import Portfolio from './components/portfolio';
import Resume from './components/resume';
import Navbar from './components/navbar';
import Intro from './components/Intro';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Banner />
        <Intro />
        <Resume />
        <Portfolio />
        <Contact />

      </div>
    );
  }
}

export default App;
