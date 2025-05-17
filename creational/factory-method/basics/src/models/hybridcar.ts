import { FuelType } from "../vehicle";
import Car from "./car";

export class HybridCar extends Car {
    private fuelLevel: number;
    private batteryLevel: number;
    
    constructor(model: string, year: number, maxSpeed: number) {
        super(model, year, maxSpeed);
        this.fuelLevel = 100;
        this.batteryLevel = 100;
        this.info.type = FuelType.HYBRID;
    }
    
    public refuel(): void {
        console.log(`Refueling ${this.info.model} with gasoline and charging battery`);
        this.fuelLevel = 100;
        this.batteryLevel = 100;
    }
}

export default HybridCar;