import { Elements } from "../interfaces/elements";

class CompoundHtml implements Elements{
    private elements: Elements[] = [];
    private tag: string;

    constructor(tag: string){
        this.tag = tag;
    }

    add(element: Elements): void {
        this.elements.push(element);
    }

    remove(element: Elements): void {
        const index = this.elements.indexOf(element);
        if (index !== -1) 
            this.elements.splice(index, 1);
    }

    draw(): string {
        const children = this.elements.map(element => element.draw()).join('');
        return `<${this.tag}>\n${children}</${this.tag}>\n`;
    }
}

export default CompoundHtml