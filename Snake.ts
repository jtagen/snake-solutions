import display from "./display";

import Point from "./Point";

class Snake {
  currentPosition: Point;
  currentDirection: number = 1; //{NORTH,EAST,SOUTH,WEST}

  constructor() {
    this.currentPosition = new Point(0, 0);
  }

  move(steps: number) {
    let x = this.currentPosition.x;
    let y = this.currentPosition.y;
    if (this.currentDirection == 1) y -= steps;
    if (this.currentDirection == 2) x += steps;
    if (this.currentDirection == 3) y += steps;
    if (this.currentDirection == 4) x -= steps;
    this.currentPosition = new Point(x, y);
  }

  turnLeft() {
    this.currentDirection--;
    if (this.currentDirection == 0) this.currentDirection = 4;
  }
  turnRight() {
    this.currentDirection++;
    if (this.currentDirection == 5) this.currentDirection = 1;
  }
}

export default Snake;
