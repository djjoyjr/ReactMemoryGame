import React from "react";
import NavBar from "../NavBar";
import Score from "../Score";
import HighScore from "../HighScore";


// By extending the React.Component class, Counter inherits functionality from it
class GameBoard extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    count: 0,
    highscore: 0
  };

  // handleIncrement increases this.state.count by 1
  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.count + 1 });
  };

  handleCardClick = () => {
    console.log("You just clicked" + this + "image");
    alert("You just clicked" + this + "image");
    // Get the data-value of the clicked button
    // const pickedYet = event.target.attributes.getNamedItem("data-value").value;
    // Clone this.state to the newState object
    // We'll modify this object and use it to set our component's state
    // const newState = { ...this.state };

    // if (pickedYet === "picked") {
    //   // restart game
    //
    // } else {
    //   // Increment score by +1
    // }
    // Replace our component's state with newState, load the next dog image
  };



  // The render method returns the JSX that should be rendered
  render() {
    return (
      <div>
      <NavBar />
      <div className="text-right">
        <Score>Score: {this.state.count}</Score>
        <HighScore>High Score: {this.state.highscore} </HighScore>
      </div>
    </div>
    );
  }
}

export default GameBoard;
