import display from "./display";

import Point from "./Point";

class Snake {
  currentParts: Point[] = [];
  currentDirection: number = 1; //{NORTH,EAST,SOUTH,WEST}
  size: number;

  constructor(startPosition: Point, size: number) {
    this.currentParts.push(startPosition);
    for (let i: number = 0; i < size - 2; i++)
      this.currentParts.push(new Point(startPosition.x, startPosition.y - i));
    this.size = size;
  }

  get position() {
    return this.currentParts[0];
  }

  get parts() {
    return this.currentParts;
  }

  didCollide(s: Snake) {
    for (let p of s.parts.slice(1))
      if (p.x == this.currentParts[0].x && p.y == this.currentParts[0].y)
        return true;

    return false;
  }

  move(steps: number) {
    for (let i = this.currentParts.length - 1; i > 0; i--) {
      this.currentParts[i] = new Point(
        this.currentParts[i - 1].x,
        this.currentParts[i - 1].y
      );
    }
    let x = this.currentParts[0].x;
    let y = this.currentParts[0].y;
    if (this.currentDirection == 1) y -= steps;
    if (this.currentDirection == 2) x += steps;
    if (this.currentDirection == 3) y += steps;
    if (this.currentDirection == 4) x -= steps;
    this.currentParts[0] = new Point(x, y);
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
