// https://jsonplaceholder.typicode.com/users
// https://robohash.org/1?set=set2&size=180x180

import React, { useEffect, useState } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBar from "./components/search-bar/search-bar.component";

const App = () => {
  const [monsters, setmonster] = useState([])
  const [searchString, setsearchString] = useState("")
  const [filteredMonsters, setfilteredMonsters] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setmonster(users))
  }, [])

  useEffect(() => {
    const tmp = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchString.toLowerCase())
    )
    setfilteredMonsters(tmp)
  }, [monsters, searchString])

  return (
    <>
      <SearchBar callback={setsearchString} />
      <CardList monsters={filteredMonsters} />
    </>
  )
}

export default App