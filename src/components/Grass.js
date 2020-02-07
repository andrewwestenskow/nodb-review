import React, { Component } from 'react'
import grass from '../assets/pokemon-grass.png'

class Grass extends Component {
  constructor(props) {
    super(props)

    this.state = {
      grassClicked: false,
    }

    this.checkGrass = this.checkGrass.bind(this)
  }

  checkGrass() {
    if (this.state.grassClicked) {
      this.props.catchPokemon({
        name: this.props.pokemon.name,
        image: this.props.pokemon.sprites.front_default,
      })
      this.props.refreshFn()
      this.setState({
        grassClicked: false,
      })
    } else {
      this.setState({
        grassClicked: true,
      })
    }
  }

  render() {
    return (
      <img
        style={{ width: '150px', height: '150px' }}
        src={
          this.state.grassClicked
            ? this.props.pokemon.sprites.front_default
            : grass
        }
        alt={this.props.pokemon.name}
        onClick={this.checkGrass}
      />
    )
  }
}

export default Grass
