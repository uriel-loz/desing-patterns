import { censorsConfig, Prototype } from "../interfaces/prototype";

class Vehicle implements Prototype<Vehicle> {
    private _model: string;
    private _speed: number;
    private _brand: string;
    private _censorsConfig = {
        speed: false,
        fuel: false,
        temperature: false,
        gps: false,
        tirePressure: false,
        battery: false,
        engine: false,
    };

    constructor(model: string, speed: number, brand: string, censorsConfig: censorsConfig) {
        this._model = model;
        this._speed = speed;
        this._brand = brand;
        this._censorsConfig = censorsConfig;
    }

    get model(): string {
        return this._model;
    }

    get speed(): number {
        return this._speed;
    }

    get brand(): string {
        return this._brand;
    }

    get censorsConfig(): censorsConfig {
        return this._censorsConfig;
    }

    set model(value: string) {
        this._model = value;
    }

    set speed(value: number) {
        this._speed = value;
    }

    set brand(value: string) {
        this._brand = value;
    }

    set censorsConfig(value: censorsConfig) {
        this._censorsConfig = value;
    }

    clone(): Vehicle {
        return new Vehicle(
            this._model, 
            this._speed, 
            this._brand, 
            { ...this._censorsConfig }
        );
    }
}

export default Vehicle;