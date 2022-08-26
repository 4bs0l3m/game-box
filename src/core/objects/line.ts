import { Vector2D } from "./../libs/vector2D";
import { Point } from "../types/point";
import { Draw } from "../libs/draw";
import { IObject } from "../types/IObject";

export class Line implements IObject {
  vector: Vector2D;
  points: Point[];
  drawer: Draw;
  lastPoint: Point;
  initalPoint: Point;
  rotation:number;
  name: string;
  constructor(_name: string, _point: Point) {
    this.rotation=0;
    this.name = _name;
    this.initalPoint = _point;
    this.vector = new Vector2D(_point);
    this.lastPoint = this.vector.clone().getPoint();
    this.points = [];
    this.drawer = new Draw(_name, _point);
  }
  setLocation(_point: Point) {
    this.initalPoint = new Vector2D(_point).getPoint();

    // this.drawer.moveTo(_point);
    return this;
  }

  addPoint(_point:Point) {

    this.points.push(_point);

    return this;
  }
  deleteLastPoint(){
    this.points.slice(-1,1)
  }
  getPoints() {
    return this.points;
  }

  rotate(angle: number) {
    this.rotation=angle * Math.PI / 180;
  }
  draw(ctx:CanvasRenderingContext2D) {
    let drawing = new Draw(this.name, this.initalPoint);
    let initalX=this.initalPoint.x;
    let initalY=this.initalPoint.y;
    // this.drawer.moveTo(_point);

    this.points.forEach((point) => {
      const _newPoint:Point={
        x:point.x+initalX,
        y:point.y+initalY
      }

      drawing.lineTo(_newPoint);
    });
    ctx.beginPath()
    ctx.stroke(drawing.getPath());
    ctx.translate(initalX,initalY)
    ctx.rotate(this.rotation);
     ctx.translate(-initalX,-initalY)
     ctx.closePath()
  }
}
