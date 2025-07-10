import { UIComponent } from "../interfaces/ui-component";

class Button implements UIComponent {
    private readonly width: number;
    private readonly height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    getWidth(): number {
        return this.width;
    }

    getHeight(): number {
        return this.height;
    }

    render(): string {
        return `Button Rendered with width: ${this.width} and height: ${this.height}`;
    }
}

export default Button;