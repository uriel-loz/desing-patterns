import CompoundHtml from "./composite/compound-html";
import Txt from "./leaf/txt";

class Main {
    run() {
        const body = new CompoundHtml('body');
        const div = new CompoundHtml('div');
        const label = new CompoundHtml('label');
        const text = new Txt('text');

        label.add(text);
        body.add(label);
        body.add(div);

        console.log(body.draw());
    }
}

new Main().run();
