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
  public moveDegree( distance: number, angle: number) {
    return new Vector2D({
      x: this.point.x + (distance * Math.cos(Math.PI * 2 * angle / 360)),
      y: this.point.y + (distance * Math.sin(Math.PI * 2 * angle / 360)),
    });
  }

  rotate(_lastPoint:Point,angle:number){
    let sn = Math.sin(angle);
    console.log("sn :", sn);
    let cs = Math.cos(angle);
    console.log("cs :", cs);
    let x1 = this.point.x;
    let y1 = this.point.y;
    let dx = x1 * cs - y1 * sn;

    let dy = x1 * cs + y1 * sn;
    return new Vector2D({x:dx,y:dy})
  }
  public getPoint(){
    return this.point;
  }
}
