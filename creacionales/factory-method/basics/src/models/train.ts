import { Vehicle } from "../vehicle";

class Train implements Vehicle {
    public run(): void {
        console.log('The train is running');
    }

    public stop(): void {
        console.log('The train has stopped');
    }
}

export default Train;