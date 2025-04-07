import { TextBox } from "../../interfaces/ui-components.interface";

class WinTextBox implements TextBox{
    render() {
        console.log("Windows TextBox Rendered");
    }

    processInput() {
        console.log("Windows TextBox Input Processed");
    }
}

export default WinTextBox;