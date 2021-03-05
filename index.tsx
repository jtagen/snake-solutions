import React, { Component } from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import "./style.css";
import display from "./display";
import Snake from "./Snake";
import SnakeTests from "./SnakeTests";
import WorldModel from "./WorldModel";

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
let world = new WorldModel(snake);
display(
  "The snake is at position " +
    world.Snake.currentPosition.x +
    ", " +
    world.Snake.currentPosition.y
);

world.update(1);

display(
  "The snake is at position " +
    world.Snake.currentPosition.x +
    ", " +
    world.Snake.currentPosition.y
);

display("Direction: " + world.Snake.currentDirection);
world.Snake.turnLeft();
display("Direction: " + world.Snake.currentDirection);
world.update(1);

display(
  "The snake is at position " +
    world.Snake.currentPosition.x +
    ", " +
    world.Snake.currentPosition.y
);

// Add display statements below
