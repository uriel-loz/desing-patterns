import { FuelType } from "../vehicle";
import Car from "./car";

class GasolineCar extends Car {
    private fuelLevel: number;

    constructor(model: string, year: number, maxSpeed: number) {
        super(model, year, maxSpeed);
        this.fuelLevel = 100;
        this.info.type = FuelType.GASOLINE;
    }

    refuel(): void {
        console.log(`Refueling ${this.info.model} with gasoline`);
        this.fuelLevel = 100;
    }
}

export default GasolineCar;