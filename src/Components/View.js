import React, { Component } from 'react'

class View extends Component {
  render() {
    return (
      <div>
        <p>{this.props.lyrics}</p>
      </div>
    )
  }
}

export default View
