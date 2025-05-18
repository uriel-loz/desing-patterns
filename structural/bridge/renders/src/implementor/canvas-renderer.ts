import { Render } from "../interfaces/render";

class CanvasRenderer implements Render {
    renderCircle(radius: number): void {
        console.log(`Canvas Circle with radius ${radius}`);
    }

    renderRectangle(width: number, height: number): void {
        console.log(`Canvas Rectangle with width ${width} and height ${height}`);
    }
}

export default CanvasRenderer;