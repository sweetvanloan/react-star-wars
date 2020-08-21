import React, { Component } from 'react';
import './App.css';
import Starship from "../StarshipPage/StarshipPage"
import { getAllStarships } from "../../services/sw-api"

class App extends Component {

  state = {
    starship: [],
    currentIdx: -1
  }


  async componentDidMount() {

    const starship = await getAllStarships();

    console.log("Line 21 in App.js, in getAllStarships()  starship is:", starship);

    this.setState({

      starship: starship.results,
    });
    console.log("Line 27 in App.js, in this.setState()  starship is:", starship)

  }

  render() {
    const ship = this.state.starship.map((ship, idx) => {
      return <button
        className="shipDisplay"
        key={idx}
        onClick={() => this.setState({
          currentIdx: idx
        })}
      >
        {ship.name}
      </button>
    });
    console.log("App.js line 43, ship is: ", ship)
    return (
      <div className="App">
        <header className="App-header">
          Star Wars Starships
        </header>
        <div>
          {ship}
        </div>
        <div>
          < Starship thisShip={this.state.starship[this.state.currentIdx]} />
        </div>
      </div>
    );
  }




}

export default App;
