import Panel from "./compousite/panel";
import Button from "./leaf/button";
import Label from "./leaf/label";
import TextField from "./leaf/text-field";

class Main {
    public run(): void {
        const panel = new Panel(100, 200);
        const button = new Button(50, 50);
        const label = new Label(50, 50);
        const textField = new TextField(50, 50);

        panel.addComponent(button);
        panel.addComponent(label);
        panel.addComponent(textField);

        panel.render();
    }
}

const main = new Main();
main.run();
