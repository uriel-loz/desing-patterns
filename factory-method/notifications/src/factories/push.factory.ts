import Push from "../models/push";
import { Notification } from "../notification";
import NotificationFactory from "./notification.factory";

class PushFactory extends NotificationFactory {
    createNotification(): Notification {
        return new Push();
    }
}

export default PushFactory;