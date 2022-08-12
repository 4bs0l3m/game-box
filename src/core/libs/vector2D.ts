import { Point } from "../types/point";

export class Vector2D {
  private point: Point;
  constructor({ x, y }: Point ) {
    this.point = {
      x: x,
      y: y,
    };
  }
  clone(): Vector2D {
    return new Vector2D(this.point);
  }
  /**
   * angle-0:rigth
   * angle-90:bottom
   * angle-180:left
   * angle-270:up
   * 
   * @param distance 
   * @param angle 
   * @returns 
   */
  public move( distance: number, angle: number) {
    return new Vector2D({
      x: this.point.x + (distance * Math.cos(Math.PI * 2 * angle / 360)),
      y: this.point.y + (distance * Math.sin(Math.PI * 2 * angle / 360)),
    });
  }
  getSide(){
    return{
      right:0,
      bottom:90,
      left:180,
      up:270
    }
  }
  public getPoint(){
    return this.point;
  }
}
