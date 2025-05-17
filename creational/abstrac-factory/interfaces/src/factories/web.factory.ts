import WebButton from "../components/web/web-button";
import WebTextbox from "../components/web/web-textbox";
import WebWindow from "../components/web/web-window";
import { GUIFactory } from "../interfaces/gui-factory.interface";
import { Button, TextBox, Window } from "../interfaces/ui-components.interface";

class WebFactory implements GUIFactory {
    renderButton(): Button {
        return new WebButton();
    }

    handlerClick(): Button {
        return new WebButton();
    }

    renderText(): TextBox {
        return new WebTextbox();
    }

    processInput(): TextBox {
        return new WebTextbox();
    }

    renderWindow(): Window {
        return new WebWindow();
    }

    addComponent(): Window {
        return new WebWindow();
    }
}

export default WebFactory;