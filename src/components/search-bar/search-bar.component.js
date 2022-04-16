import React from "react";

export const SearchBar = props => (
  <div>
    <input type="search"
      placeholder="Input Monsters"
      onChange={props.getSearchInput} />
  </div>
)

