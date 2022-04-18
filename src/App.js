// https://jsonplaceholder.typicode.com/users
// https://robohash.org/1?set=set2&size=180x180


import React, { Component } from "react";
import SearchBar from "./components/search-bar/search-bar.component";
import CardList from "./components/card-list/card-list.component";

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
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  onSearchChange = (str) => {
    this.setState({ searchString: str })
  }

  render() {

    const { monsters, searchString } = this.state
    const { onSearchChange } = this

    const filteredmonsters = monsters.filter(monster => (
      monster.name.toLowerCase().includes(searchString.toLowerCase())
    ))
    return (
      <div>
        < SearchBar callBack={onSearchChange} />
        < CardList monsters={filteredmonsters} />

      </div>

    )
  }


}

export default App