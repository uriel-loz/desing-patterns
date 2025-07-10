import { UIComponent } from "../interfaces/ui-component";

class Label implements UIComponent {
    private readonly width: number;
    private readonly height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    render(): string {
        return `Label Rendered with width: ${this.width} and height: ${this.height}`;
    }

    getWidth(): number {
        return this.width;
    }

    getHeight(): number {
        return this.height;
    }
}

export default Label;