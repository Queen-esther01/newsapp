import React, {Component} from 'react';
import Navbar from './components/navbar'
import HeaderImage from './components/header-image';
import About from './components/about'
import Headline from './components/headline'
import Topics from './components/topics'
import Newsitem from './components/newsitem'
import axios from 'axios'
import {Route, BrowserRouter as Router} from 'react-router-dom'
// import './App.css';
// import axios from 'axios';

class App extends Component{
  // state = {
  //   data: [],
  //   country: ""
  // }
  // async componentDidMount(){
  //   const response = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=db36851abc7f473e81bfa70e85f67e81')
  //   // console.log(response.data.articles);
  //   const res = await this.setState({ data: response });
  //   return res;
  //   console.log(this.state.data);
  // }

  // componentDidMount(){
  //   axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=db36851abc7f473e81bfa70e85f67e81')
  //   .then(res => {
  //     this.setState({
  //       data: res.data.articles
  //     })
  //     console.log(res.data.articles)
  //   })
  // }

  render(){
    //  const payload = this.state.data.map(item => <Headline key={item.id} item={item} /> );
    return (
      <Router>
        <div className="App">
          <Navbar title ='The News' icon = 'far fa-newspaper'/>
          <HeaderImage/>
          <About/>
          <div className = "search-section">
            {/* {payload} */}
            <Headline/>
            {/* <Topics/> */}
          </div>
        </div>
        <Route path = '/newsitem' component = {Newsitem} />
      </Router>
    );
  }
}

export default App;
