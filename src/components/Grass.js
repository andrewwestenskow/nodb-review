import React, { Component } from 'react'

class Grass extends Component {
  constructor(props) {
    super(props)

    this.state = {
      grassClicked: false,
    }
  }

  checkGrass() {}

  render() {
    return (
      <div>
        <p>{this.props.pokemon.name}</p>
        <img
          src={this.props.pokemon.sprites.front_default}
          onClick={() => {
            this.props.catchPokemon({
              name: this.props.pokemon.name,
              image: this.props.pokemon.sprites.front_default,
            })
          }}
        />
      </div>
    )
  }
}

export default Grass
