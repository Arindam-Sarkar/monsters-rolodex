import React, { Component } from "react";
import './App.css'

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchString: ""
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(resp => resp.json())
      .then(users => this.setState({ monsters: users }))
  }

  getSearchInput = str => {
    this.setState({ searchString: str.target.value })
  }

  render() {
    const { monsters, searchString } = this.state
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchString.toLowerCase())
    )

    return (
      <div className="App">

        <div>
          <input type="search"
            placeholder="Input Monsters"
            onChange={this.getSearchInput} />
        </div>


        <div>
          {
            filteredMonsters.map(monster => {
              return <h1 key={monster.id}>{monster.name}</h1>
            })
          }
        </div>

      </div>
    )
  }

}

export default App