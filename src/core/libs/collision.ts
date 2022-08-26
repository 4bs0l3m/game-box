import { Point } from "../types/point";

export class Collision {
    initalPoint: Point;
    startPoint: Point ;
    endPoint: Point ;
    radius:number;
    constructor(_initialPoint:Point,_startPoint:Point,_endPoint:Point,_r:number){
        this.initalPoint=_initialPoint;
        this.startPoint=_startPoint;
        this.endPoint=_endPoint;
        this.radius=_r;
    }
    isCollided(_point:Point){

    }

}
