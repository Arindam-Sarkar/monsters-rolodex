import React from "react";
import { Card } from "../card/card.component";

export const CardList = props => (

  <div>
    {
      props.monsters.map((monster) => {
        return <Card key={monster.id} monster={monster} />
      })
    }

  </div>

)