import SMS from "../models/sms";
import { Notification } from "../notification";
import NotificationFactory from "./notification.factory";

class SMSFactoy extends NotificationFactory {
    createNotification(): Notification {
        return new SMS();
    }
}

export default SMSFactoy;