import React, { Component } from 'react'

class Pokemon extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isEditing: false,
      userInput: '',
    }
    this.toggleEdit = this.toggleEdit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  toggleEdit() {
    this.setState({
      isEditing: !this.state.isEditing,
    })
  }

  handleChange(e) {
    this.setState({
      userInput: e.target.value,
    })
  }

  render() {
    return (
      <div>
        {this.state.isEditing ? (
          <div>
            <input onChange={this.handleChange} />
            <button
              onClick={() => {
                this.props.saveName(this.props.pokemon.id, this.state.userInput)
                this.toggleEdit()
              }}
            >
              Save
            </button>
          </div>
        ) : (
          <p onDoubleClick={this.toggleEdit}>{this.props.pokemon.name}</p>
        )}
        <img src={this.props.pokemon.image} />
        <button
          onClick={() => this.props.releasePokemon(this.props.pokemon.id)}
        >
          Release
        </button>
      </div>
    )
  }
}

export default Pokemon

const template = [
  {
    id: 0,
    position: 0,
    type: 'verb',
    response: '',
  },
  {
    id: 1,
    position: 1,
    type: 'noun',
  },
  {
    id: 2,
    position: 2,
    type: 'adjective',
  },
]
