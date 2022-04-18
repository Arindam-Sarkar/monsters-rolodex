// https://jsonplaceholder.typicode.com/users
// https://robohash.org/1?set=set2&size=180x180

import { useEffect, useState } from "react"
import CardList from "./components/card-list/card-list.component"
import SearchBar from "./components/search-bar/search-bar.component"

const App = () => {

  const [monsters, setmonsters] = useState([])
  const [searchString, setsearchString] = useState("")
  const [filteredMonsters, setfilteredMonsters] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => setmonsters(users))
  }, [])


  useEffect(() => {
    const flm = monsters.filter(monster => (
      monster.name.toLowerCase().includes(searchString.toLowerCase())
    ))
    setfilteredMonsters(flm)
  }, [searchString, monsters])

  return (
    <>
      <SearchBar callBack={setsearchString} />
      <CardList monsters={filteredMonsters} />
      <h1>{searchString}</h1>
    </>
  )
}

export default App