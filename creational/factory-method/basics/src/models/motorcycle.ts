import { Vehicle } from "../vehicle";

class Motorcycle implements Vehicle {
    public run(): void {
        console.log('The motorcycle is running');
    }

    public stop(): void {
        console.log('The motorcycle has stopped');
    }
}

export default Motorcycle;