import React from "react";

const Card = (props) => {
  const { name, id, email } = props.monster

  return (
    <div>
      <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt="monster " />
      <h1>{name}</h1>
      <h1>{email}</h1>
    </div>
  )
}

export default Card