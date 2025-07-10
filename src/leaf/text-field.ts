import { UIComponent } from "../interfaces/ui-component";

class TextField implements UIComponent {
    private readonly width: number;
    private readonly height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    render(): void {
        console.log(`TextField Rendered with width: ${this.width} and height: ${this.height}`);
    }

    getWidth(): number {
        return this.width;
    }

    getHeight(): number {
        return this.height;
    }
}

export default TextField;