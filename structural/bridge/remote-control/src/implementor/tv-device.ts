import { Device } from "../interfaces/device.interface";

class TvDevice implements Device{
    private enabled: boolean = false;
    private volume: number = 3;

    isEnabled(): boolean {
        return this.enabled;
    }
    powerOn(): void {
        console.log('TV is on');
    }

    powerOff(): void {
        console.log('TV is off');
    }

    setChannel(channel: number): void {
        console.log(`TV channel is set to ${channel}`);
    }

    increaseVolume(): void {
        this.volume++;
        console.log(`TV volume is set to ${this.volume}`);
    }

    decreaseVolume(): void {
        this.volume--;
        console.log(`TV volume is set to ${this.volume}`);
    }
}

export default TvDevice;