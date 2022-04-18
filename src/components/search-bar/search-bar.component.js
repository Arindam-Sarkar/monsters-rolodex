import React, { Component } from "react";


class SearchBar extends Component {

  render() {
    return (
      <>
        <input type="search"
          placeholder="Enter Monsters"
          onChange={str => this.props.callBack(str.target.value)}
        />

      </>
    )
  }
}

export default SearchBar