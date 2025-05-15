import { ILogger } from "../interfaces/ilogger";
import AdvancedLogger from "../services/advanced-logger";

class AdvancedLoggerAdapter implements ILogger{
    private advancedLogger: AdvancedLogger;

    constructor(advancedLogger: AdvancedLogger){
        this.advancedLogger = advancedLogger;
    }

    debug(msg: string): void {
        this.advancedLogger.info(msg);
    }

    warn(msg: string): void {
        this.advancedLogger.warn(msg);
    }

    error(msg: string): void {
        this.advancedLogger.fatal(msg);
    }
}

export default AdvancedLoggerAdapter;