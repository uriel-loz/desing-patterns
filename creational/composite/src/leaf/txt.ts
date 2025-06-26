import { Render } from "../interfaces/render";

class Txt implements Render {
    private text: string;

    constructor(text: string) {
        this.text = text;
    }

    draw(): string {
        return `${this.text}\n`;
    }
}

export default Txt;