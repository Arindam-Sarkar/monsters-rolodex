import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <>
        <img alt="monster " src={`https://robohash.org/${this.props.monster.id}?set=set2&size=180x180`} />
        <h1>{this.props.monster.name}</h1>
        <h1>{this.props.monster.email}</h1>
      </>
    )
  }
}

export default Card