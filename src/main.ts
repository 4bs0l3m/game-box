// import "style.css";

import { Draw, Game, Vector2D } from "./core";
import { Line } from "./core/objects/line";

const app = <HTMLCanvasElement>window.document.getElementById("app");
const game = new Game(app);
// game.resize(document.x)
// game.resize(window.screenX,window.screenY);

let X=50;
let Y=50
const rect = new Line("dd", { x: X, y: Y });
let rectPath=rect
    .addPoint(50, 0)
    .addPoint(50,90)
    .addPoint(50,180)
    .addPoint(50,270);
    game.addObjects(rectPath);
    game.update();
    setInterval(() => {
        rectPath.move({
            x:5,
            y:5
        })
        
        
        // rectPath=rect.draw();
        

        game.update()
    }, 100);
    
// game.context.rotate(50)
// game.update();
// rectPath.
    