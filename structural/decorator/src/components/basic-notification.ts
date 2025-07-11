import { Notifier } from "../interfaces/notifier";

class BasicNotification implements Notifier {
    send(message: string): void {
        console.log(`Send basic notification: ${message}`);
    }
}

export default BasicNotification;