import { Notification } from "../notification";

abstract class NotificationFactory implements Notification {
    abstract createNotification(): Notification;

    send(): void {
        const notification = this.createNotification();
        notification.send();
    }

    read(): void {
        const notification = this.createNotification();
        notification.read();
    }
}

export default NotificationFactory;