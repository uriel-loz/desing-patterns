import { Button, TextBox, Window } from "./ui-components.interface";

export interface GUIFactory {
    renderButton(): Button;
    handlerClick(): Button;
    renderText(): TextBox;
    processInput(): TextBox;
    renderWindow(): Window;
    addComponent(): Window;
}