import Container from "./container";

class Panel extends Container{
    constructor(width: number, height: number) {
        super(width, height);
    }

    render(): string {
        const children = this.children.map((child) => child.render());
        console.log(`Panel Rendered with width: ${this.getWidth()} and height: ${this.getHeight()}`);
        console.log(children);

        return `Panel Rendered with width: ${this.getWidth()} and height: ${this.getHeight()}\n${children.join("\n")}`;
    }
}

export default Panel;