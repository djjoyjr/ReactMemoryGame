import React from "react";
import "./CharacterCard.css";

const CharacterCard = props => (
  <div className={`card ${props["data-value"]}`}  onClick={props.handleCardClick}>
    <div className="img-container">
      <img alt={props.name} src={props.image}
      />
    </div>
    <div className="content">
      <strong>Name:</strong> {props.name}
    </div>
  </div>
);

export default CharacterCard;
