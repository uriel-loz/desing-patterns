import { Device } from "../interfaces/device.interface";

abstract class RemoteControl {
    protected device: Device;

    constructor(device: Device) {
        this.device = device;
    }

    togglePower(): void {
        if (this.device.isEnabled())
            this.device.powerOff();
        else
            this.device.powerOn();
    }
}

export default RemoteControl;