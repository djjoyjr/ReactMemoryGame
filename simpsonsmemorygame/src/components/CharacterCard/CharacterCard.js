import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} onClick={props.handleCardClick}
      />
    </div>
    <div className="content">
      <strong>Name:</strong> {props.name}
    </div>
  </div>
);

export default CharacterCard;
