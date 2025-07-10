import Container from "./container";

class Window extends Container {
    constructor(width: number, height: number) {
        super(width, height);
    }

    render(): string {
        const children = this.children.map((child) => child.render());
        console.log(`Window Rendered with width: ${this.getWidth()} and height: ${this.getHeight()}`);
        console.log(children);

        return `Window Rendered with width: ${this.getWidth()} and height: ${this.getHeight()}\n${children.join("\n")}`;
    }
}

export default Window;