import GameObject from "./GameObject";
import { IShowSpeed } from "./interfaces";
class Enemy extends GameObject {
    speed: IShowSpeed;
    constructor(x: number, y: number, width: number, height: number, image: string, context: CanvasRenderingContext2D, speed: IShowSpeed) {
        super(x, y, width, height, image, context);
        this.speed = speed;
    }

    public update() {
        this.x += this.speed.x;
        this.y += this.speed.y; 
    }
}

export default Enemy;