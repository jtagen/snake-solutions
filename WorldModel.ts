import Snake from "./Snake";
import View from "./View";
class WorldModel {
  snake: Snake;
  height: number;
  width: number;
  _view: View;

  constructor(snake: Snake, height, width) {
    this.snake = snake;
    this.height = height;
    this.width = width;
    this._view = null;
  }
  public update(steps: number) {
    this.snake.move(steps);
    if (this._view != null) this._view.display(this);
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

  public set view(view: View) {
    this._view = view;
  }
}

export default WorldModel;
