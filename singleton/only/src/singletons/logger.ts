class Logger {
    private static instance: Logger;

    private constructor() {

    }

    public static getIntance(): Logger{
        if (!Logger.instance) 
            Logger.instance = new Logger();

        return Logger.instance;
    }

    public log(message:string): void{
        console.log(message);
    }
}

export default Logger;