export class Game {
    private _canvas!: HTMLCanvasElement;
    public get canvas(): HTMLCanvasElement {
        return this._canvas;
    }

    private _context!: CanvasRenderingContext2D;
    public get context(): CanvasRenderingContext2D {
        return this._context;
    }
  
    constructor(element:HTMLCanvasElement){
        if(element){
            this.setGame(element)
        }else{
            this.setGame(this.createGameElement())
        }
    }
    public resize(w:number,h:number){
        this._canvas.setAttribute('width',w.toString());
        this._canvas.setAttribute('height',h.toString());
    }
    private createGameElement(){
        return document.createElement('canvas')
    }
    private setGame(element:HTMLCanvasElement){
        this._canvas=element;
        this._context=<CanvasRenderingContext2D>this.canvas.getContext('2d');
    }
}
