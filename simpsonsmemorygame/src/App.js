import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";
import GameBoard from "./components/GameBoard";
import NavBar from "./components/NavBar";

class App extends Component {
  // Setting this.state.characters to the characters json array
  state = {
    characters
  };

  // Map over this.state.character and render a CharacterCard component for each character object
  render() {
    return (
      <div>
        <NavBar />
        <Wrapper>
          <GameBoard />
          {this.state.characters.map(character => (
            <CharacterCard
              id={character.id}
              key={character.id}
              name={character.name}
              image={character.image}
            />
          ))}
        </Wrapper>
    </div>
    );
  }
}

export default App;
