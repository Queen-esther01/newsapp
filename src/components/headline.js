import React, { Component } from 'react'
import Newsitem from './newsitem'
// import { Link} from 'react-router-dom'
import axios from 'axios'
import image from '../../src/img/angle.png';


class Headline extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            interest: "",
            urlToImage: ""
        }
    }
    
    
    componentDidMount(){
        // axios.get(`https://gnews.io/api/v3/search?q=${this.state.interest}&image=required&token=3e2f6f41729ca83fd46cf1213d80147d`)
        axios.get(`https://api.currentsapi.services/v1/search?keywords=${this.state.interest}&language=en&apiKey=_oLHn8Iw-DCubr8oDkIpuwiemDRYKNg_PM9QCXG4U4MMzSVj`)
        .then(res => {
          this.setState({
            data: res.data.news
          })
          console.log(res.data.news)
        })
      }
    
    
    // componentWillUnmount(){
    //      this.setState({
    //         data: res.data.news
    //      })
    // }
    
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
                
                {/* <form className = 'country-form'>
                    <label htmlFor='country'>Search for news by typing in a topic you find interesting</label>
                    <input autoFocus value = {this.state.country} onChange ={this.handleChange} className ="country-input" type = 'text' />
                </form> */}
                <p id ='top'>Note: The Search functionality is unavailable for now.</p>
                {/* <button className = 'headline-button' onClick = {this.handleClick}>
                    Search
                    <Link to ='/newsitem'>check</Link>
                    
                </button> */}
            </div>
            <a href = '#top'><img src={image} alt = 'angle' className='angle'/></a>
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
