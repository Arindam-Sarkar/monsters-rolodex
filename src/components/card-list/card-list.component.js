import React, { Component } from "react";
import Card from "../card/card.component";

class CardList extends Component {

  render() {

    return (
      <>
        {
          this.props.monsters.map(monster => (
            <Card key={monster.id} monster={monster} />
          ))
        }

      </>
    )
  }
}

export default CardList