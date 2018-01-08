import React from "react";
import "./NavBar.css"
import Title from "../Title";
import Subtitle from "../Subtitle";


// If we want a child component to update or pass data to its parent, we can create a method inside the parent for the update
// Then bind the method to the parent, and pass it to the child as a prop

const NavBar = props => (
  <nav className="navbar">
    <Title>SIMPSONS MEMORY GAME</Title>
    <Subtitle>CLICK ON AN IMAGE TO EARN A POINT, BUT DON'T CLICK ON ANY IMAGE MORE THAN ONCE!!!</Subtitle>
    <h1>Score: {props.count} High Score: {props.highscore}</h1>
  </nav>
);

export default NavBar;
