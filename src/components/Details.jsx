import React, { Component } from 'react'
import { useParams } from 'react-router-dom'

class Details extends Component {
  constructor(props){
    super(props)
    this.state={
      id: props.match.params.id
    }
  }

  render() {
    return (
      <div>Details {this.state.id}</div>
    )
  }
}

export default Details