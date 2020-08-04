import React, { Component } from 'react'

class Headline extends Component {
    state = {
        country: ""
    }
    
    handleChange = (e) =>{
        this.setState({country: e.target.value})
    }

    handleClick = () =>{
        console.log(this.state.country)
    }

    render(){
        return (
            <div className = 'headlines'>
                <h4>Top Headlines</h4>
                <form className = 'country-form'>
                    <label htmlFor='country'>Type in a Country to get latest happenings</label>
                    <input autoFocus value = {this.state.country} onChange ={this.handleChange} className ="country-input" type = 'text' />
                </form>
                <button className = 'headline-button' onClick = {this.handleClick} >check</button>
            </div>
        )
    }
}

export default Headline
