export interface Prototype<T> {
    clone(): T;
}

export interface censorsConfig {
    speed: boolean;
    fuel: boolean;
    temperature: boolean;
    gps: boolean;
    tirePressure: boolean;
    battery: boolean;
    engine: boolean;
}