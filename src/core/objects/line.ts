import { Vector2D } from './../libs/vector2D';
import { Game } from "../libs/game";
import { Point } from '../types/point';
import { Draw } from '../libs/draw';

export class Line {
    vector:Vector2D;
    points:Point[];
    drawer:Draw;
    lastPoint:Point;
    initalPoint:Point;
    name: string;
    constructor(_name:string,_point:Point){
        this.name=_name;
        this.initalPoint=_point;
        this.vector=new Vector2D(_point);
        this.lastPoint=this.vector.clone().getPoint();
        this.points=[];
        this.drawer=new Draw(_name,_point)
        
    }
    setLocation(_point:Point){
        this.initalPoint=new Vector2D(_point).getPoint();
        
        this.drawer.moveTo(_point);
        return this;
    }
    
    addPoint(distance: number, angle: number){
        this.lastPoint=new Vector2D(this.lastPoint).move(distance,angle).getPoint()
        this.points.push(this.lastPoint);
        // console.log(this)
        return this;
    }
    getPoints(){
        return this.points;
    }
    move(_point:Point){
        this.setLocation({
            x:this.initalPoint.x+_point.x,
            y:this.initalPoint.y+_point.y
        })
        this.points.forEach(item=>{
            item.x+=_point.x;
            item.y+=_point.y;
        })
    }
    rotate(){
        
    }
    draw(){
        let drawing=new Draw(this.name,this.initalPoint);
        this.points.forEach(point=>{
            drawing.lineTo(point);
        })
        return drawing.getPath();
    }

}
