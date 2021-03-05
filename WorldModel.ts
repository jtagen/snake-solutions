import Snake from "./Snake";

class WorldModel {
  snake: Snake;
  height: number;
  width: number;

  constructor(snake: Snake, height, width) {
    this.snake = snake;
    this.height = height;
    this.width = width;
  }
  public update(steps: number) {
    this.snake.move(steps);
  }

  public get Snake() {
    return this.snake;
  }
  public get worldHeight() {
    return this.height;
  }
  public get worldWidth() {
    return this.width;
  }
}

export default WorldModel;
