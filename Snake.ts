import display from "./display";

// place your code on line 5 above the export statement below

class Snake {
  private currentPosition: number;
  private currentDirection: number;

  public constructor() {
    this.currentPosition = 0;
    this.currentDirection = 1;
  }

  public turn() {
    if (this.currentDirection == 1) this.currentDirection = -1;
    else this.currentDirection = 1;
  }
  public move(squares: number) {
    if (this.currentDirection == 1)
      this.currentPosition = this.currentPosition + squares;
    else this.currentPosition = this.currentPosition - squares;
  }

  public get position() {
    return this.currentPosition;
  }
}
export default Snake;
