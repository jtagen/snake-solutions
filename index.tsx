import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";
import display from "./display";
import Snake from "./Snake";
import SnakeTests from "./SnakeTests";
import WorldModel from "./WorldModel";
import SnakeController from "./SnakeController";
import AvoidWallsPlayer from "./AvoidWallsPlayer";

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: "React"
    };
  }

  render() {
    return (
      <div>
        <pre id="output">
          OUTPUT: <br />
        </pre>
        {}
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));

/*
After creating a new Snake, create a new WorldModel, passing this Snake to the constructor. Then call the WorldModel's update method.  Tell the Snake to turn.  Call the update method again.  See if the Snake's positions are what you expect them to be.
*/
let snake = new Snake();
let world = new WorldModel(snake, 10, 10);
let sc = new SnakeController(world, snake);
let player = new AvoidWallsPlayer(sc);
let directions = ["", "Up", "Right", "Down", "Left"];
for (let i = 0; i < 1000; i++) {
  display(
    "The snake is at position " +
      world.Snake.currentPosition.x +
      ", " +
      world.Snake.currentPosition.y +
      " and is facing " +
      directions[world.Snake.currentDirection]
  );

  player.makeTurn();
  world.update(1);
}
