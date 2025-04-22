import { GUIFactory } from "./interfaces/gui-factory.interface";
import { Button, TextBox, Window } from "./interfaces/ui-components.interface";

class Application {
    private factory!: GUIFactory;
    private button!: Button;
    private textBox!: TextBox;
    private window!: Window;

    constructor(factory: GUIFactory) {
        this.factory = factory;
    }

    createInterface(): void {
        this.button = this.factory.renderButton();
        this.textBox = this.factory.renderText();
        this.window = this.factory.renderWindow();

        this.button.render();
        this.textBox.render();
        this.window.addComponent();
    }
}

export default Application;