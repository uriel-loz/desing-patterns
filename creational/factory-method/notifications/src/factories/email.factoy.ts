import Email from "../models/email";
import { Notification } from "../notification";
import NotificationFactory from "./notification.factory";

class EmailFactory extends NotificationFactory {
    createNotification(): Notification {
        return new Email();
    }
}

export default EmailFactory;