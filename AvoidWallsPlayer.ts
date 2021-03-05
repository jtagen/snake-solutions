import Player from "./Player";
import ScaneController from "./SnakeController";
import WorldModel from "./WorldModel";
import display from "./display";

class AvoidWallsPlayer extends Player {
  constructor(sc: SnakeController) {
    super(sc);
  }

  public makeTurn() {
    //NORTH, EAST, WEST, SOUTH

    if (this.sc.snakeDirection == 1 && this.sc.snakePosition.y == 0) {
      //hitting upper wall
      if (this.sc.snakePosition.x == this.sc.snakeWorld.width)
        //along right-hand side
        this.sc.turnSnakeLeft();
      else this.sc.turnSnakeRight();
    }

    if (
      this.sc.snakeDirection == 3 &&
      this.sc.snakePosition.y == this.sc.snakeWorld.height
    ) {
      //hitting lower wall

      if (this.sc.snakePosition.x == this.sc.snakeWorld.width)
        //along right-hand side
        this.sc.turnSnakeRight();
      else this.sc.turnSnakeLeft();
    }

    if (this.sc.snakeDirection == 4 && this.sc.snakePosition.x == 0) {
      //hitting left wall
      if (this.sc.snakePosition.y == this.sc.snakeWorld.height)
        //along top edge
        this.sc.turnSnakeRight();
      else this.sc.turnSnakeLeft();
    }

    if (
      this.sc.snakeDirection == 2 &&
      this.sc.snakePosition.x == this.sc.snakeWorld.width
    ) {
      //hitting right wall
      if (this.sc.snakePosition.y == this.sc.snakeWorld.height)
        //along top edge
        this.sc.turnSnakeLeft();
      else this.sc.turnSnakeRight();
    }
  }
}

export default AvoidWallsPlayer;
