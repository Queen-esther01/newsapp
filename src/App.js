import React, {Component} from 'react';
import Navbar from './components/navbar'
import HeaderImage from './components/header-image';
import About from './components/about'
import Headline from './components/headline'
import Topics from './components/topics'
// import './App.css';
// import axios from 'axios';

class App extends Component{
  render(){
    return (
      <div className="App">
        <Navbar title ='The News' icon = 'far fa-newspaper'/>
        <HeaderImage/>
        <About/>
        <div className = "search-section">
          <Headline/>
          <Topics/>
        </div>
      </div>
    );
  }
}

export default App;
