import TextDecorator from "./text-decorator";

class Italic extends TextDecorator {
    render(text: string): string {
        return `<i>${super.render(text)}</i>`;
    }
}

export default Italic;