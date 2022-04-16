import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()

    this.state = {
      monsters: [],
      searchString: ""
    }
  }

  onSearchChange = str => {
    this.setState({ searchString: str.target.value })
  }

  render() {

    return (
      <div className='App'>
        < input type="search"
          placeholder='Enter Monsters'
          onChange={this.onSearchChange}
        />

        <h1>{this.state.searchString}</h1>
      </div>


    )
  }

}

export default App;
