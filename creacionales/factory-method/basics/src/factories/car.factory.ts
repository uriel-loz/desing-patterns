
import ElectricCar from "../models/electriccar";
import GasolineCar from "../models/gasolinecar";
import HybridCar from "../models/hybridcar";
import { Vehicle, VehicleInfo, FuelType } from '../vehicle';
import VehicleFactory from "./vehicle.factory";

class CarFactory extends VehicleFactory {
    private options!: VehicleInfo;
    private carEntities = {
        [FuelType.GASOLINE]: GasolineCar,
        [FuelType.ELECTRIC]: ElectricCar,
        [FuelType.HYBRID]: HybridCar,
    }

    constructor(options: VehicleInfo){
        super();
        this.options = options;
    }

    public createVehicle(): Vehicle {
        const {model, year, maxSpeed, type} = this.options

        const cartSelect = this.carEntities[type];

        return new cartSelect(model, year, maxSpeed);
    }
}

export default CarFactory;