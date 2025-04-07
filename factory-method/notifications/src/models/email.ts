import { Notification } from "../notification";

class Email implements Notification {
    send(): void {
        console.log("Email sent");
    }

    read(): void {
        console.log("Email read");
    }
}

export default Email;