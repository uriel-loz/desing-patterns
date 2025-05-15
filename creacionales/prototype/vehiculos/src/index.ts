import Vehicle from "./models/vehicle";

class Main {
    private vehicle?: Vehicle;

    run() {
        this.vehicle = new Vehicle("Model S", 120, "Tesla", {
            speed: true,
            fuel: true,
            temperature: false,
            gps: true,
            tirePressure: false,
            battery: true,
            engine: false,
        });

        console.log(this.vehicle);

        const clone = this.vehicle.clone();
        clone.censorsConfig.speed = false;
        clone.censorsConfig.fuel = false;
        clone.censorsConfig.gps = false;

        console.log(clone);
    }
}

const main = new Main();
main.run();