import CompoundHtml from "./composite/compount-html";
import Txt from "./leaf/txt";

class Main {
    public run(): void {
        const div = new CompoundHtml("div");
        const div2 = new CompoundHtml("div");
        const div3 = new CompoundHtml("div");
        const p = new CompoundHtml("p");
        const h1 = new CompoundHtml("h1");
        const text = new Txt("Composite Pattern");
        const title = new Txt("Title");

        p.add(text);
        div.add(p);
        h1.add(title);
        div.add(h1);
        div2.add(div3);
        div.add(div2);

        console.log(div.draw());
    }
}

const main = new Main();
main.run();