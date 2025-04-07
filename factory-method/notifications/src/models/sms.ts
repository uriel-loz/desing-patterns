import { Notification } from "../notification";

class SMS implements Notification {
    send(): void {
        console.log("Sms sent");
    }

    read(): void {
        console.log("Sms read");
    }
}

export default SMS;