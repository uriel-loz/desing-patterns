import { Elements } from "../interfaces/elements";

class Txt implements Elements {
    private text: string;

    constructor(text: string) {
        this.text = text;
    }

    draw(): string {
        return `${this.text}\n`
    }
}

export default Txt;