import React, { Component } from "react";

class SearchBar extends Component {

  render() {
    return (
      <div>
        <input type="search"
          placeholder="Enter Monster"
          onChange={str => this.props.callback(str.target.value)}
        />
      </div>
    )
  }
}

export default SearchBar