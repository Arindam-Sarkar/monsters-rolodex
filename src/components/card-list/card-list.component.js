import React, { Component } from "react";
import Card from "../card/card.component";

class CardList extends Component {

  render() {
    return (
      <div>
        {
          this.props.monsters.map(monster =>
            <Card key={monster.id} monster={monster} />
          )
        }
      </div>
    )
  }
}

export default CardList