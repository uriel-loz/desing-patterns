import Motorcycle from "../models/motorcycle";
import { Vehicle } from "../vehicle";
import VehicleFactory from "./vehicle.factory";

class MotorcycleFactory extends VehicleFactory {
    public createVehicle(): Vehicle {
        return new Motorcycle();
    }
}

export default MotorcycleFactory;