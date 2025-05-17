import { ILogger } from "../interfaces/ilogger";
import LegacyLogger from "../services/legacy-logger";

class LegacyLoggerAdapter implements ILogger{
    private legacyLogger: LegacyLogger;

    constructor(legacyLogger: LegacyLogger){
        this.legacyLogger = legacyLogger;
    }

    debug(msg: string): void {
        this.legacyLogger.log(msg);
    }

    warn(msg: string): void {
        this.legacyLogger.log(msg);
    }

    error(msg: string): void {
        this.legacyLogger.error(msg);
    }
    
}

export default LegacyLoggerAdapter;