import NotificationDecorator from "./notification-decorator";

class EmailDecorator extends NotificationDecorator {
    send(message: string): void {
        super.send(message);

        console.log(`Send email notification: ${message}`);
    }
}

export default EmailDecorator;