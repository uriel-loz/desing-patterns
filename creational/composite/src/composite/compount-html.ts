import { Render } from "../interfaces/render";

class CompoundHtml implements Render{
    private children: Render[] = [];
    private tag: string;

    constructor(tag: string) {
        this.tag = tag;
    }

    add(child: Render): void {
        this.children.push(child);
    }

    remove(child: Render): void {
        const index = this.children.indexOf(child);

        if (index !== -1) 
            this.children.splice(index, 1);
    }

    draw(): string {
        const content = this.children.map((child) => child.draw()).join("");
        return `<${this.tag}>\n${content}</${this.tag}>\n`
    }
}

export default CompoundHtml;