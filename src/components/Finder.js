import React, { Component } from 'react'
import Grass from './Grass'

class Finder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wildPokemon: [],
    }
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        Finder.js
        <Grass />
      </div>
    )
  }
}

export default Finder
