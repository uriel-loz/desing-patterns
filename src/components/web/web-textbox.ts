import { TextBox } from "../../interfaces/ui-components.interface";

class WebTextbox implements TextBox {
    render(): void {
        throw new Error("Method not implemented.");
    }

    processInput(): void {
        throw new Error("Method not implemented.");
    }
}

export default WebTextbox;