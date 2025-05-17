import { Notification } from "../notification";

class Push implements Notification {
    send(): void {
        console.log("Push sent");
    }

    read(): void {
        console.log("Push read");
    }
}

export default Push;