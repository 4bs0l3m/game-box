import {  Game, Line } from "./core";


const app = <HTMLCanvasElement>window.document.getElementById("app");

const game = new Game(app);
// game.resize(document.x)
game.resize(500,500);

let X=50;
let Y=50
const rect = new Line("dd", { x: X, y: Y });

let rectPath=rect
.addPoint({x:0,y:50})
.addPoint({x:50,y:50})



game.addObjects(rectPath);

game.update();

