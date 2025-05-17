import AdvancedLoggerAdapter from "./adapters/advanced-logger-adpater";
import LegacyLoggerAdapter from "./adapters/legacy-logger-adapter";
import { ILogger } from "./interfaces/ilogger";
import AdvancedLogger from "./services/advanced-logger";
import LegacyLogger from "./services/legacy-logger";

class Main {
    run(): void {
        const USE_ADVANCED = true;

        let logger: ILogger;

        if (USE_ADVANCED) {
            const adv = new AdvancedLogger();
            logger = new AdvancedLoggerAdapter(adv);
        } else {
            const legacy = new LegacyLogger();
            logger = new LegacyLoggerAdapter(legacy);
        }

        logger.debug("Arrancando la aplicación");
        logger.warn("Esto es sólo un aviso");
        logger.error("¡Algo salió mal!");
    }
}

const main = new Main();
main.run();

