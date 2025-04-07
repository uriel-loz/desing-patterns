import { FuelType } from "../vehicle";
import Car from "./car";

class ElectricCar extends Car {
    private batteryLevel: number;

    constructor(model: string, year: number, maxSpeed: number) {
        super(model, year, maxSpeed);
        this.batteryLevel = 100;
        this.info.type = FuelType.ELECTRIC;
    }

    refuel(): void {
        console.log(`Charging ${this.info.model} battery`);
        this.batteryLevel = 100;
    }
}

export default ElectricCar;