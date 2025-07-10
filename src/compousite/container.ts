import { UIComponent } from "../interfaces/ui-component";

abstract class Container implements UIComponent {
    protected children: UIComponent[] = [];
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
    }

    addComponent(component: UIComponent): void {
        this.children.push(component);
    }

    removeComponent(component: UIComponent): void {
        this.children = this.children.filter((child) => child !== component);
    }

    getWidth(): number {
        return this.width;
    }

    getHeight(): number {
        return this.height;
    }

    abstract render(): void;
}

export default Container;