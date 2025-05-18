export interface Device {
    isEnabled(): boolean;
    powerOn(): void;
    powerOff(): void;
    setChannel(channel: number): void;
    increaseVolume(): void;
    decreaseVolume(): void;
}