import { GUIFactory } from "../interfaces/gui-factory.interface";
import { Button, TextBox, Window } from "../interfaces/ui-components.interface";

class MacOsFactory implements GUIFactory {
    renderButton(): Button {
        return {
            render: () => console.log("MacOs Button Rendered"),
            handleClick: () => console.log("MacOs Button Clicked")
        };
    }

    handlerClick(): Button {
        return {
            render: () => console.log("MacOs Button Rendered"),
            handleClick: () => console.log("MacOs Button Clicked")
        };
    }

    renderText(): TextBox {
        return {
            render: () => console.log("MacOs TextBox Rendered"),
            processInput: () => console.log("MacOs TextBox Input Processed")
        };
    }

    processInput(): TextBox {
        return {
            render: () => console.log("MacOs TextBox Rendered"),
            processInput: () => console.log("MacOs TextBox Input Processed")
        };
    }

    renderWindow(): Window {
        return {
            render: () => console.log("MacOs Window Rendered"),
            addComponent: () => console.log("MacOs Component Added")
        };
    }

    addComponent(): Window {
        return {
            render: () => console.log("MacOs Window Rendered"),
            addComponent: () => console.log("MacOs Component Added")
        };
    }
}

export default MacOsFactory;