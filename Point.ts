class Point {
  xcoord: number;
  ycoord: number;

  public constructor(x: number, y: number) {
    this.xcoord = x;
    this.ycoord = y;
  }

  get x() {
    return this.xcoord;
  }
  get y() {
    return this.ycoord;
  }
}
export default Point;
