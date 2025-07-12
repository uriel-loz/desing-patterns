import TextDecorator from "./text-decorator";

class Size extends TextDecorator {
    render(text: string): string {
        return `<p style="font-size: 20px">${super.render(text)}</p>`;
    }
}

export default Size;