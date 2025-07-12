import NotificationDecorator from "./notification-decorator";

class PushDecorator extends NotificationDecorator {
    send(message: string): void {
        super.send(message);
        console.log(`Send push notification: ${message}`);
    }
}

export default PushDecorator;