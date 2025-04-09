import MacOsFactory from "./factories/macos.factory";
import WebFactory from "./factories/web.factory";
import WindowsFactory from "./factories/windows.factory";
import { GUIFactory } from "./interfaces/gui-factory.interface";

class Main {
    private factory!: GUIFactory;
    private os = process.platform;

    constructor() {
        this.initializeFactory();
    }

    private initializeFactory() {
        switch (this.os) {
            case "darwin":
                this.factory = new MacOsFactory();
                break;
            case "win32":
                this.factory = new WindowsFactory();
                break;
            default:
                this.factory = new WebFactory();
        }
    }

    public run() {
        console.log(`Running on ${this.os}`);
        this.factory.renderButton().render();
        this.factory.renderText().render();
        this.factory.renderWindow().render();
    }
}

const main = new Main();
main.run();