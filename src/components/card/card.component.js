import React, { Component } from "react";

class Card extends Component {



  render() {
    const { id, name, email } = this.props.monster

    return (
      <div>
        <img alt="monster " src={`https://robohash.org/${id}?set=set2&size=180x180`} />
        <h1>{name}</h1>
        <h1>{email}</h1>
      </div>
    )
  }
}

export default Card