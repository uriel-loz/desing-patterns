import Container from "./container";

class Panel extends Container{
    constructor(width: number, height: number) {
        super(width, height);
    }

    render(): void {
        console.log(this.children[0].render());
        

        // const children = this.children.map((child) => child.render());
        // console.log(`Panel Rendered with width: ${this.getWidth()} and height: ${this.getHeight()}`);
        // console.log(children);
    }
}

export default Panel;