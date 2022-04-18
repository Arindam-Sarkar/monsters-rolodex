import React from "react";
import Card from "../card/card.component";
const CardList = ({ monsters }) => {


  return (
    monsters.map((monster) => (
      <Card key={monster.id} monster={monster} />
    ))
  )
}

export default CardList