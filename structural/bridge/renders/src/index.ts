import Circle from "./abstraction/circle";
import SvgRenderer from "./implementor/svg-renderer";

class Main {
    public run(): void {
        const svgRenderer = new SvgRenderer();
        const circle = new Circle(svgRenderer, 4);
        circle.draw();
    }
}

const main = new Main();
main.run();