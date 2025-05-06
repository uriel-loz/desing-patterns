import path from "path";
import fs from "fs";
import { Config } from '../interfaces/config-manager.interface';

class ConfigManager {
    private static instance: ConfigManager;
    private config?: Config;

    private constructor() {
        const filePath = path.join(__dirname, "../config/config.json");
        
        if (fs.existsSync(filePath))
            this.config = JSON.parse(fs.readFileSync(filePath, "utf-8"))
    }

    public static getInstance(): ConfigManager {
        if (!ConfigManager.instance)
            ConfigManager.instance = new ConfigManager();

        return ConfigManager.instance;
    }

    public get(key: keyof Config): Config[keyof Config] | undefined {
        return this.config ? this.config[key] : undefined;
    }

    public set<K extends keyof Config>(key: K, value: Config[K]): void {
        if (this.config) {
            this.config[key] = value;
            const filePath = path.join(__dirname, "../config/config.json");
            fs.writeFileSync(filePath, JSON.stringify(this.config, null, 2));
        }
    }
}

export default ConfigManager;