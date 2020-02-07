import React, { Component } from 'react'
import Header from './components/Header'
import Finder from './components/Finder'
import Pokedex from './components/Pokedex'
import axios from 'axios'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      caughtPokemon: [],
    }

    this.catchPokemon = this.catchPokemon.bind(this)
    this.releasePokemon = this.releasePokemon.bind(this)
    this.saveName = this.saveName.bind(this)
  }

  componentDidMount() {
    axios.get('/api/pokemon').then(res => {
      this.setState({
        caughtPokemon: res.data,
      })
    })
  }

  catchPokemon(pokemon) {
    axios.post('/api/pokemon', { pokemon }).then(res => {
      this.setState({
        caughtPokemon: res.data,
      })
    })
  }

  saveName(id, newName) {
    axios.put(`/api/pokemon/${id}`, { name: newName }).then(res => {
      this.setState({
        caughtPokemon: res.data,
      })
    })
  }

  releasePokemon(id) {
    axios.delete(`/api/pokemon/${id}`).then(res => {
      this.setState({
        caughtPokemon: res.data,
      })
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Finder catchPokemon={this.catchPokemon} />
        <Pokedex
          saveName={this.saveName}
          releasePokemon={this.releasePokemon}
          caughtPokemon={this.state.caughtPokemon}
        />
      </div>
    )
  }
}

export default App
