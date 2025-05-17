import ConfigManager from "./singletons/config-manager";
import Logger from "./singletons/logger";

class Main {
    logger() {
        if (Logger.getIntance() === Logger.getIntance()) {
            console.log("Logger is a singleton instance");

            Logger.getIntance().log("Hello, Singleton!");
        }
    }

    configManager(){
        const instance = ConfigManager.getInstance();
        console.log(instance.get("appName"));
        instance.set("appName", "TestApp");
        console.log(instance.get("appName"));
    }
}

const main = new Main();
main.logger();
main.configManager();