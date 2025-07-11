import NotificationDecorator from "./notification-decorator";

class SlackDecorator extends NotificationDecorator {
    send(message: string): void {
        super.send(message);
        console.log(`Send slack notification: ${message}`);
    }
}

export default SlackDecorator;