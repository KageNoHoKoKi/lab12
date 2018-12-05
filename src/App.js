import React, { Component } from 'react';
import './App.css';
import request from 'superagent';
import Input from './Components/Input';

class App extends Component {
  constructor(){
    super();
    this.state = {
      lyrics: []
    }
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
  }

handleInputSubmit =(artist,song) => {
    const url = `https://api.lyrics.ovh/v1/${encodeURIComponent(artist)}/${encodeURIComponent(song)}` ;
//?? dont understand how this works
    request.get(url, (err, res) => {
        this.setState({lyrics: res.body});
    });
}

  render() {
    return (
      <div>
       <Input lyrics={this.state.lyrics.lyrics} handleInputSubmit={(artist,song)=> this.handleInputSubmit(artist,song)}/>
       
      </div>
    );
  }
}

export default App;
