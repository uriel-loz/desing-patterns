import TextDecorator from "./text-decorator";

class Color extends TextDecorator {
    render(text: string): string {
        return `<p style="color: red">${super.render(text)}</p>`;
    }
}

export default Color;