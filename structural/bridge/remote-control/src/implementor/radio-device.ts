import { Device } from "../interfaces/device.interface";

class RadioDevice implements Device{
    private enabled: boolean = false;
    private volume: number = 3;

    isEnabled(): boolean {
        return this.enabled;
    }

    powerOn(): void {
        console.log('Radio is on');
    }

    powerOff(): void {
        console.log('Radio is off');
    }

    setChannel(channel: number): void {
        console.log(`Radio channel is set to ${channel}`);
    }

    increaseVolume(): void {
        this.volume++;
        console.log(`Radio volume is set to ${this.volume}`);
    }

    decreaseVolume(): void {
        this.volume--;
        console.log(`Radio volume is set to ${this.volume}`);
    }
}

export default RadioDevice;