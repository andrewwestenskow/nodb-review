import React, { Component } from 'react'
import Grass from './Grass'
import axios from 'axios'

class Finder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      wildPokemon: [],
    }
    this.componentDidMount = this.componentDidMount.bind(this)
  }

  componentDidMount() {
    axios.get('/api/wild-pokemon').then(res => {
      this.setState({
        wildPokemon: res.data,
      })
    })
  }

  render() {
    const pokemonList = this.state.wildPokemon.map(element => {
      return (
        <Grass
          key={element.id}
          catchPokemon={this.props.catchPokemon}
          pokemon={element}
          refreshFn={this.componentDidMount}
        />
      )
    })

    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        {pokemonList}
      </div>
    )
  }
}

export default Finder
