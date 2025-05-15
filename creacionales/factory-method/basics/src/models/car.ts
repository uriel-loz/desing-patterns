import { FuelType, Vehicle, VehicleInfo } from "../vehicle";

abstract class Car implements Vehicle {
    protected info: VehicleInfo;

    constructor(model: string, year: number, maxSpeed: number) {
        this.info = {
            type: FuelType.GASOLINE,
            model,
            year,
            maxSpeed,
        }
    }

    run(): void {
        console.log('The car is running');
    }

    stop(): void {
        console.log('The car has stopped');
    }

    getInfo(): VehicleInfo {
        return this.info;
    }

    abstract refuel(): void;
}

export default Car;