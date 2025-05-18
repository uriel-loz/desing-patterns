import DvdDevice from "./implementor/dvd-device";
import AdvanceRemote from "./abstraction/advance-remote";
import TvDevice from "./implementor/tv-device";
import RadioDevice from "./implementor/radio-device";
import BasicRemote from "./abstraction/basic-remote";

class Main {
    public run(): void {
        const tv = new TvDevice();
        const dvd = new DvdDevice();
        const radio = new RadioDevice();

        const remoteAdvance = new AdvanceRemote(tv);
        const remoteBasic = new BasicRemote(radio);

        remoteAdvance.togglePower();
        remoteAdvance.setChannel(2);
        remoteAdvance.increaseVolume();

        remoteBasic.togglePower();
    }
}

const main = new Main();
main.run();