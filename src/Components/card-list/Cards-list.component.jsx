import React from "react";
import "./Cards-list.styles.css";
import { Card } from "../Cards/Card.component";
export const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Card key={monster.id}monster={monster} />
      ))}
    </div>
  );
};
