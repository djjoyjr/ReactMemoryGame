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
    message: "Click on any image to begin.",
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

  handleCardClick = (index) => {

    let clickStatus = this.state.characters[index];

    if (clickStatus.clicked===false) {
      this.setState({ score: this.state.score + 1 });
      this.setState({ message: "Aye Caramba! Great Guess."});
      clickStatus.clicked = true;
    }
    else {
      this.setState({ message: "DOH! You already clicked that one. Click any image to play again."});
      this.setState({score: 0});
      for (var i = 0; i < characters.length; i++) {
        characters[i].clicked=false;
      }
    }
    if (this.state.highscore <= this.state.score) {
      this.setState({ highscore: this.state.highscore +1});
    }
  this.shuffleArray(characters);
  };


  // The render method returns the JSX that should be rendered
  render() {
    return (
    <Wrapper>
      <NavBar
        count={this.state.score}
        highscore={this.state.highscore}
        message={this.state.message}
      />

    {this.state.characters.map((character, i) => (
        <CharacterCard
          id={character.id}
          key={character.id}
          name={character.name}
          image={character.image}
          index={i}
          handleCardClick={this.handleCardClick}
        />
      ))}
    </Wrapper>
    );
  }
}

export default GameBoard;
