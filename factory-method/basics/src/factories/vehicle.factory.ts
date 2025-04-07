import { Vehicle } from "../vehicle";

abstract class VehicleFactory {
    public abstract createVehicle(): Vehicle;
}

export default VehicleFactory;