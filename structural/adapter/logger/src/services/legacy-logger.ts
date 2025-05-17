class LegacyLogger {
    log(message: string): void{
        console.log('message from legacy log: ', message);
    }

    error(message: string): void{
        console.error('error from legacy error: ', message);
    }
}

export default LegacyLogger;
