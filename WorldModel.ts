import Snake from "./Snake";

class WorldModel {
  snake: Snake;

  constructor(snake: Snake) {
    this.snake = snake;
  }
  public update(steps: number) {
    this.snake.move(steps);
  }

  public get Snake() {
    return this.snake;
  }
}

export default WorldModel;
