import { TextBox } from "../../interfaces/ui-components.interface";

class WebTextbox implements TextBox {
    render(): void {
        console.log("Web TextBox Rendered");
    }

    processInput(): void {
        console.log("Web TextBox Rendered");
    }
}

export default WebTextbox;