import { Render } from "../interfaces/render";
import Shape from "./shape";

class Circle extends Shape {
    private radius: number;
    
    constructor(render: Render, radius: number) {
        super(render);
        this.radius = radius;
    }

    draw(): void {
        this.render.renderCircle(this.radius);
    }
}

export default Circle;
