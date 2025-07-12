import TextDecorator from "./text-decorator";

class Underline extends TextDecorator {
    render(text: string): string {
        return `<u>${super.render(text)}</u>`;
    }
}

export default Underline;