import { TextBox } from "../../interfaces/ui-components.interface";

class MacTextbox implements TextBox {
    render(): void {
        console.log("Mac Textbox Rendered");
    };

    processInput(): void {
        console.log("Mac Textbox Input Processed");
    };
}

export default MacTextbox;