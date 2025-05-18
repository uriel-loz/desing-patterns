import RemoteControl from "./remote-control";

class AdvanceRemote extends RemoteControl {
    setChannel(channel: number): void {
        this.device.setChannel(channel);
    }

    increaseVolume(): void {
        this.device.increaseVolume();
    }

    decreaseVolume(): void {
        this.device.decreaseVolume();
    }
}

export default AdvanceRemote;