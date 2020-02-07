import React from 'react'
import Pokemon from './Pokemon'

function Pokedex(props) {
  const pokemonList = props.caughtPokemon.map(element => {
    return (
      <Pokemon
        saveName={props.saveName}
        releasePokemon={props.releasePokemon}
        pokemon={element}
        key={element.id}
      />
    )
  })

  return (
    <div>
      <h2>POKEDEX</h2>
      {pokemonList}
    </div>
  )
}

export default Pokedex
