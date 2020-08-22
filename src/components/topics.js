import React, { Component } from 'react'

class Topics extends Component {

    state = {
        topic: ""
    }
    
    handleChange = (e) =>{
        this.setState({topic: e.target.value})
    }

    handleClick = () =>{
        console.log(this.state.topic)
    }

    render() {
        return (
            <div className = 'topic'>
               <h4>News on specific topics</h4>
                <form className = 'topic-form'>
                    <label htmlFor='topic'>Type in a Country to get latest happenings</label>
                    {/* <div className = 'input-wrapper'></div> */}
                    <input value = {this.state.topic} onChange ={this.handleChange} className ="topic-input" type = 'text' />
                </form>
                <button className = 'topic-button' onClick = {this.handleClick} >check</button> 
            </div>
        )
    }
}

export default Topics
