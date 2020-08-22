import React, { Component } from 'react'
import Newsitem from './newsitem'
// import { Link} from 'react-router-dom'
import axios from 'axios'

class Headline extends Component {

    state = {
        data: [],
        interest: "",
        urlToImage: ""
    }
    
    componentDidUpdate(){
        axios.get(`https://newsapi.org/v2/everything?q=${this.state.interest}&apiKey=db36851abc7f473e81bfa70e85f67e81`)
        .then(res => {
          this.setState({
            data: res.data.articles
          })
          console.log(res.data.articles)
        })
      }
      
    handleChange = (e) =>{
        this.setState({interest: e.target.value})
    }

    // handleClick = () =>{
    //     console.log(this.state.country)
    // }

    render(){
        return (
            <>
            <div className = 'headlines'>
                {/* <h4>Headlines on topics</h4> */}
                
                <form className = 'country-form'>
                    <label htmlFor='country'>Search for news by typing in a topic you find interesting</label>
                    <input autoFocus value = {this.state.country} onChange ={this.handleChange} className ="country-input" type = 'text' />
                </form>
                {/* <button className = 'headline-button' onClick = {this.handleClick}>
                    Search
                    <Link to ='/newsitem'>check</Link>
                    
                </button> */}
            </div>
            {/* {this.state.data.map(news => {
                   return <Newsitem key = {news.source.id} allnews = {news} />
                })
               }  */}
        <Newsitem item={this.state.data} />
            </>
        )
    }
}

export default Headline
