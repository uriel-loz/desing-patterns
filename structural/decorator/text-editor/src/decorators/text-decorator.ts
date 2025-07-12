import { Format } from "../interfaces/format";

abstract class TextDecorator implements Format {
    protected formatText: Format;

    constructor(formatText: Format) {
        this.formatText = formatText;
    }

    render(text: string): string {
        return this.formatText.render(text);
    }
}

export default TextDecorator;