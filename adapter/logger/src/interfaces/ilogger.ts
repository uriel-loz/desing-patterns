export interface ILogger {
    debug(msg: string): void;
    warn(msg: string): void;
    error(msg: string): void;
}