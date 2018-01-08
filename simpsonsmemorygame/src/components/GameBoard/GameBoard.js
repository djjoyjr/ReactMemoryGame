import React from "react";
import NavBar from "../NavBar";
import characters from "../../characters.json";
import CharacterCard from "../CharacterCard";
import Wrapper from "../Wrapper";

// By extending the React.Component class, Counter inherits functionality from it
class GameBoard extends React.Component {
  // Setting the initial state of the Counter component
  state = {
    score: 0,
    highscore: 0,
    characters
  };

  componentDidMount() {
    console.log("Component mounted successfully");
  }

  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
  }

  handleCardClick = () => {
    console.log("You just clicked" + this.state.characters);

    this.setState({ score: this.state.score + 1 });

    if (this.state.highscore <= this.state.score) {
      this.setState({ highscore: this.state.highscore +1});
    }

  this.shuffleArray(characters);


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
    <Wrapper>
      <NavBar
        count={this.state.score}
        highscore={this.state.highscore}
      />

      {this.state.characters.map(character => (
        <CharacterCard
          id={character.id}
          key={character.id}
          name={character.name}
          image={character.image}
          handleCardClick={this.handleCardClick}
        />
      ))}
    </Wrapper>
    );
  }
}

export default GameBoard;
