export class Vector2D {
  private _x: number;
  public get x(): number {
    return this._x;
  }
  public set x(value: number) {
    this._x = value;
  }
  private _y: number;
  public get y(): number {
    return this._y;
  }
  public set y(value: number) {
    this._y = value;
  }
  constructor({ x, y }: { x: number; y: number }) {
    this._x = x;
    this._y = y;
  }
  clone(): Vector2D {
    return new Vector2D({ x: this._x, y: this.y });
  }
}
