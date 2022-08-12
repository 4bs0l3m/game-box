import { Point } from '../types/point';
export class Draw {
    private path: Path2D;
    private location:Point;
    constructor(_name:string,_point:Point){
        this.path=new Path2D(_name);
        this.location={x:0,y:0}
        this.setLocation(_point)
        this.moveTo(this.location);
    }
    moveTo(_point:Point) {
        this.path.moveTo(_point.x,_point.y);
        this.setLocation(_point);
    }
    lineTo(_point:Point){
        this.path.lineTo(_point.x,_point.y);
        this.setLocation(_point);
    }
    setLocation(_point:Point){
        this.location={
            x:_point.x,
            y:_point.y
        }
        
        return this;
    }
    getPath(){
        return this.path;
    }
    arc(_point:Point,_radius:number){
        console.log('this.location :', this.location);
        this.path.arc(this.location.x,this.location.y,_point.x,_point.y,_radius)
        
        
        this.setLocation(_point);
    }
}
