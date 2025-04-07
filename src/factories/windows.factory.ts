import WinButton from "../components/windows/win-button";
import WinTextBox from "../components/windows/win-textbox";
import WinWindow from "../components/windows/win-window";
import { GUIFactory } from "../interfaces/gui-factory.interface";
import { Button, TextBox, Window } from "../interfaces/ui-components.interface";

class WindowsFactory implements GUIFactory {
    renderButton(): Button {
        return new WinButton();
    }

    handlerClick(): Button {
        return new WinButton();
    }

    renderText(): TextBox {
        return new WinTextBox();
    }

    processInput(): TextBox {
        return new WinTextBox();
    }

    renderWindow(): Window {
        return new WinWindow();
    }

    addComponent(): Window {
        return new WinWindow();
    }
}

export default WindowsFactory;