import MacButton from "../components/macos/mac-button";
import MacTextbox from "../components/macos/mac-textbox";
import MacWindow from "../components/macos/mac-window";
import { GUIFactory } from "../interfaces/gui-factory.interface";
import { Button, TextBox, Window } from "../interfaces/ui-components.interface";

class MacOsFactory implements GUIFactory {
    renderButton(): Button {
        return new MacButton();
    }

    handlerClick(): Button {
        return new MacButton();
    }

    renderText(): TextBox {
        return new MacTextbox();
    }

    processInput(): TextBox {
        return new MacTextbox();
    }

    renderWindow(): Window {
        return new MacWindow();
    }

    addComponent(): Window {
        return new MacWindow();
    }
}

export default MacOsFactory;