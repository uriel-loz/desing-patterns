import { Prototype } from "../interfaces/prototype";

class FormTemplate implements Prototype<FormTemplate> {
    private name: string;
    private size: number;
    private color: string;

    constructor(name: string, size: number, color: string) {
        this.name = name;
        this.size = size;
        this.color = color;
    }

    public getName(): string {
        return this.name;
    }

    public getSize(): number {
        return this.size;
    }

    public getColor(): string {
        return this.color;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setSize(size: number): void {
        this.size = size;
    }

    public setColor(color: string): void {
        this.color = color;
    }

    public clone(): FormTemplate {
        return new FormTemplate(this.name, this.size, this.color);
    }
}

export default FormTemplate;