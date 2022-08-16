import { AngleEnum } from './core/enums/AngleEnum.enum';
// import "style.css";

import { Draw, Game, Vector2D } from "./core";
import { Line } from "./core/objects/line";

const app = <HTMLCanvasElement>window.document.getElementById("app");

const game = new Game(app);
// game.resize(document.x)
game.resize(500,500);

let X=50;
let Y=50
const rect = new Line("dd", { x: X, y: Y });

let rectPath=rect
.addPoint({x:0,y:50})
// .addPoint({x:100,y:100})
.addPoint({x:50,y:50})



game.addObjects(rectPath);

game.update();

// setInterval(() => {
//         rectPath.rotate(0)
//         game.update()
//     }, 100);

// game.context.rotate(50)
// game.update();
// rectPath.
    