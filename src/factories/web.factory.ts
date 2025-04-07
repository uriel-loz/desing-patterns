import { GUIFactory } from "../interfaces/gui-factory.interface";
import { Button, TextBox, Window } from "../interfaces/ui-components.interface";

class WebFactory implements GUIFactory {
    renderButton(): Button {
        return {
            render: () => console.log("Web Button Rendered"),
            handleClick: () => console.log("Web Button Clicked")
        };
    }

    handlerClick(): Button {
        return {
            render: () => console.log("Web Button Rendered"),
            handleClick: () => console.log("Web Button Clicked")
        };
    }

    renderText(): TextBox {
        return {
            render: () => console.log("Web TextBox Rendered"),
            processInput: () => console.log("Web TextBox Input Processed")
        };
    }

    processInput(): TextBox {
        return {
            render: () => console.log("Web TextBox Rendered"),
            processInput: () => console.log("Web TextBox Input Processed")
        };
    }

    renderWindow(): Window {
        return {
            render: () => console.log("Web Window Rendered"),
            addComponent: () => console.log("Web Component Added")
        };
    }

    addComponent(): Window {
        return {
            render: () => console.log("Web Window Rendered"),
            addComponent: () => console.log("Web Component Added")
        };
    }
}

export default WebFactory;