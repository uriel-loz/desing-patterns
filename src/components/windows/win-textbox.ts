import { TextBox } from "../../interfaces/ui-components.interface";

class WinTextBox implements TextBox{
    render(): void {
        console.log("Windows TextBox Rendered");
    }

    processInput(): void {
        console.log("Windows TextBox Input Processed");
    }
}

export default WinTextBox;