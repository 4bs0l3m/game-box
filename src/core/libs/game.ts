import { Line } from "../objects/line";

export class Game {
    constructor(element: HTMLCanvasElement) {
      this.setGame(element);
      this.gameObjects=[];
    }
  private _canvas!: HTMLCanvasElement;
  private gameObjects:Line[];
  public get canvas(): HTMLCanvasElement {
    return this._canvas;
  }

  private _context!: CanvasRenderingContext2D;
  public get context(): CanvasRenderingContext2D {
    return this._context;
  }

  public resize(w: number, h: number) {
    this._canvas.setAttribute("width", w.toString());
    this._canvas.setAttribute("height", h.toString());
  }
  
  private setGame(element: HTMLCanvasElement) {
    this._canvas = element;
    this._context = <CanvasRenderingContext2D>this.canvas.getContext("2d");
  }
  addObjects(_paths:Line){
    this.gameObjects.push(_paths);
    this._context.beginPath();
    this.context.save();
  }
  update(){
    // console.log('this.gameObjects :', this.gameObjects);
    this._context.clearRect(0,0,this._canvas.width,this._canvas.height);
    this.gameObjects.forEach(item=>{
      this._context.stroke(item.draw());
    })
    this._context.beginPath();
    this.context.save();
  }
}
