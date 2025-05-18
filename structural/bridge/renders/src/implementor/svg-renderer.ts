import { Render } from "../interfaces/render";

class SvgRenderer implements Render {
    renderCircle(radius: number): void {
        console.log(`SVG Circle with radius ${radius}`);
    }

    renderRectangle(width: number, height: number): void {
        console.log(`SVG Rectangle with width ${width} and height ${height}`);
    }
}

export default SvgRenderer;