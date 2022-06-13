import React from "react";
import "./Card.styles.css";
export const Card = (props) => {
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
        alt="monster"
      />
      <h5>{props.monster.name}</h5>
      <p>{props.monster.email}</p>
    </div>
  );
};
