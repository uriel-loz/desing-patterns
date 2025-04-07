export interface Vehicle {
    run(): void,
    stop(): void,
    getInfo(): VehicleInfo
}
export interface VehicleInfo {
    type: FuelType,
    model: string,
    year: number,
    maxSpeed: number,
}

export enum FuelType {
    GASOLINE = "gasoline",
    ELECTRIC = "electric",
    HYBRID = "hybrid"
}