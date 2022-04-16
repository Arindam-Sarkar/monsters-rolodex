import React, { Component } from "react";
import CardList from "./components/card-list/card-list.component";
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


        <CardList monsters={filteredMonsters} />

      </div>
    )
  }

}

export default App