import CarFactory from "./factories/car.factory";
import MotorcycleFactory from "./factories/motorcycle.factory";
import TrainFactory from "./factories/train.factory";
import { FuelType } from "./vehicle";

const electricCar = new CarFactory({ 
    model: "Tesla Model S", 
    year: 2025, 
    maxSpeed: 250, 
    type: FuelType.ELECTRIC 
}).createVehicle();

const familyCar = new CarFactory({ 
    model: "Toyota Prius", 
    year: 2024, 
    maxSpeed: 180, 
    type: FuelType.HYBRID 
}).createVehicle();

const sportsCar = new CarFactory({ 
    model: "Ferrari F8", 
    year: 2025, 
    maxSpeed: 340,
    type: FuelType.GASOLINE 
}).createVehicle();
// const train = new TrainFactory().createVehicle();
// const motorcycle = new MotorcycleFactory().createVehicle();

// train.run();
// motorcycle.run();
console.log('Electric Car Info:', electricCar.getInfo());
console.log('Family Car Info:', familyCar.getInfo());
console.log('Sports Car Info:', sportsCar.getInfo());