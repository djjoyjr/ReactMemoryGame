import React from "react";
import "./CardClick.css";

const CardClick = props =>
  <button
    onClick={props.onClick}
    className={`card-click ${props["data-value"]}`}
    {...props}
  />;

export default CardClick;
