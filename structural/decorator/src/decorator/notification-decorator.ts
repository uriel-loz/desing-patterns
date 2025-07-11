import { Notifier } from "../interfaces/notifier";

abstract class NotificationDecorator implements Notifier {
    protected notification: Notifier;

    constructor(notification: Notifier) {
        this.notification = notification;
    }

    send(message: string): void {
        this.notification.send(message);
    }
}

export default NotificationDecorator;