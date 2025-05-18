import { Render } from "../interfaces/render";

abstract class Shape {
    protected render: Render;

    constructor(render: Render) {
        this.render = render;
    }

    abstract draw(): void;
}

export default Shape;