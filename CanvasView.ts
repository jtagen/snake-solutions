import View from "./View";
import WorldModel from "./WorldModel";
import Snake from "./Snake";
class CanvasView implements View {
  scale: number;
  canvas: HTMLCanvasElement;
  context: CanvasRenderingContext2D;
  public constructor(scale: number) {
    this.scale = scale;
    this.canvas = document.createElement("canvas");
    document.body.appendChild(this.canvas);
    this.context = this.canvas.getContext("2d");
  }
  public display(world: WorldModel): void {
    this.canvas.width = world.width * this.scale;
    this.canvas.height = world.height * this.scale;

    //temporary background, so I can see what's going on
    this.context.fillStyle = "yellow";
    this.context.fillRect(
      0,
      0,
      world.height * this.scale,
      world.width * this.scale
    );

    //show the Snake
    this.context.fillStyle = "red";

    for (let snake of world.allSnakes()) {
      for (let pos of snake.parts) {
        this.context.fillRect(pos.x*this.scale, pos.y * this.scale, this.scale, this.scale);
      }
    }
  }
}

export default CanvasView;
