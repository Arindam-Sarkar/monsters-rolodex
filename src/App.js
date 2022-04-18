import React, { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBar from "./components/search-bar/search-bar.component";

// https://jsonplaceholder.typicode.com/users
// https://robohash.org/1?set=set2&size=180x180

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
    console.log(str);
    this.setState({ searchString: str })
  }

  render() {

    const { monsters, searchString } = this.state

    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchString.toLowerCase())
    )

    return (
      <>
        <SearchBar callback={this.onSearchChange} />
        <h1>{searchString}</h1>
        <CardList monsters={filteredMonsters} />
      </>
    )

  }
}


export default App