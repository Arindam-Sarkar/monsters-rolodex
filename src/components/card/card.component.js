import React from "react";

export const Card = props => (
  <>
    <div>
      <h1 key={props.monster.name}>{props.monster.name}</h1>
    </div>
  </>
)