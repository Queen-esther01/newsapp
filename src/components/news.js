import React, { Component } from 'react'
import Newsitem from './newsitem'
import axios from 'axios'

class News extends Component {

    state = {
        data: [],
        country: ""
    }
    
    componentDidMount(){
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=db36851abc7f473e81bfa70e85f67e81`)
        .then(res => {
          this.setState({
            data: res.data.articles
          })
          console.log(res.data.articles)
        })
      }

    render() {
        return (
            <div className = 'container'>
                <div className = 'row'>
                    <div className = 'col s4'>
                        <Newsitem item={this.state.data} />
                    </div>
                </div>
            </div>
        )
    }
}

export default News
