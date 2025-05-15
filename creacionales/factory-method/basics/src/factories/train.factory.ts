import Train from "../models/train";
import { Vehicle } from "../vehicle";
import VehicleFactory from "./vehicle.factory";

class TrainFactory extends VehicleFactory {
    public createVehicle(): Vehicle {
        return new Train();
    }
}

export default TrainFactory