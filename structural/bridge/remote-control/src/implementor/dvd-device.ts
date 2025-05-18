import { Device } from "../interfaces/device.interface";

class DvdDevice implements Device{
    private enabled: boolean = false;
    private volume: number = 3;

    isEnabled(): boolean {
        return this.enabled;
    }

    powerOn(): void {
        console.log('Dvd is on');
    }

    powerOff(): void {
        console.log('Dvd is off');
    }

    setChannel(channel: number): void {
        console.log(`Dvd channel is set to ${channel}`);
    }

    increaseVolume(): void {
        this.volume++;
        console.log(`Dvd volume is set to ${this.volume}`);
    }

    decreaseVolume(): void {
        this.volume--;
        console.log(`Dvd volume is set to ${this.volume}`);
    }
}

export default DvdDevice;