import NotificationDecorator from "./notification-decorator";

class SMSDecorator extends NotificationDecorator {
    send(message: string): void {
        super.send(message);
        console.log(`Send SMS notification: ${message}`);
    }
}

export default SMSDecorator;