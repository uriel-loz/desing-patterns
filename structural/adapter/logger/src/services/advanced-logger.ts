class AdvancedLogger {
    info(message: string): void{
        console.log('message from advanced log: ', message);
    }

    warn(message: string): void{
        console.log('message from advanced log: ', message);
    }

    fatal(message: string): void{
        console.log('message from advanced log: ', message);
    }
}

export default AdvancedLogger;