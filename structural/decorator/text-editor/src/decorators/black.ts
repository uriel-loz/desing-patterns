import TextDecorator from "./text-decorator";

class Black extends TextDecorator {
    render(text: string): string {
        return `<black>${super.render(text)}</black>`;
    }
}

export default Black;