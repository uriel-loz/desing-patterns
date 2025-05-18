import { Render } from "../interfaces/render";
import Shape from "./shape";

class Rectangule extends Shape {
    private width: number;
    private height: number;

    constructor(render: Render, width: number, height: number) {
        super(render);
        this.width = width;
        this.height = height;
    }

    draw(): void {
        this.render.renderRectangle(this.width, this.height);
    }
}

export default Rectangule;