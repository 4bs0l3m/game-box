import {  Game, Line } from "./core";


const app = <HTMLCanvasElement>window.document.getElementById("app");

const game = new Game(app);
// game.resize(document.x)
game.resize(500,500);

let X=50;
let Y=50
const rect = new Line("dd", { x: X, y: Y });




game.addObjects(rect);

game.update();
app.addEventListener('mouseup',(event)=>{
    console.log(event);
    // rect.deleteLastPoint();
    // game.update();
    rect.addPoint({
        x:event.offsetX-rect.initalPoint.x,
        y:event.offsetY-rect.initalPoint.y
    })
    game.update();
})
// setInterval(()=>{
//     rectPath.rotate(2);
//     game.update()
// },100)
