import React from "react";

const SearchBar = (props) => {

  return (
    <>
      <input type="search"
        placeholder="Enter Monsters"
        onChange={str => props.callBack(str.target.value)}
      />
    </>

  )
}

export default SearchBar