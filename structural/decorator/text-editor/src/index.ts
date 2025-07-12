import BasicText from "./components/basic-text";
import Black from "./decorators/black";
import Color from "./decorators/color";
import Italic from "./decorators/italic";
import Size from "./decorators/size";
import Underline from "./decorators/underline";

class Main {
    run() {
        let text = new BasicText();
        text = new Black(text);
        text = new Color(text);
        text = new Italic(text);
        text = new Size(text);
        text = new Underline(text);

        console.log(text.render("Hello World"));
    }
}

const main = new Main();
main.run();