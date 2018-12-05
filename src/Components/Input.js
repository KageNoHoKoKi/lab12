//rce

import React, { Component } from 'react'


class Input extends Component {
    constructor(props){
        super(props);
        //we are requesting lyrics with artist and song 
        //response should be lyrics in JSON
        this.state= {
              artist : "",
              song : "",
              // lyrics: []
          }
    }

    //dynamically handling both artist and song inputs
  handleChange = (event) =>{
    this.setState({[event.target.name]:event.target.value})
    //onSubmit a function calling the API request function should pull
    //the JSON object from the api
  }
  handleSubmit = () => {
    // console.log(
    // "The handleSubmit function says: Your input value is: " + this.state.term
    // );
    this.props.handleInputSubmit(this.state.artist,this.state.song);
    }

   

  render() {
   
    return (
      
      <div>
        <input type="text" name="artist" placeholder="artist name" onChange={this.handleChange}/>
        <input type="text" name="song" placeholder="song name" onChange={this.handleChange}/>
        <input type="button" value="Find Lyrics" onClick={this.handleSubmit}/>
        <p>{this.props.lyrics}</p>
      </div>
    )
  }

}

export default Input
