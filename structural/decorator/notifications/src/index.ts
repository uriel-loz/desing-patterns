import BasicNotification from "./components/basic-notification";
import EmailDecorator from "./decorator/email-decorator";
import PushDecorator from "./decorator/push-decorator";
import SlackDecorator from "./decorator/slack-decorator";
import SMSDecorator from "./decorator/sms-decorator";

class Main {
    run() {
        let notification = new BasicNotification();
        notification = new EmailDecorator(notification);
        notification = new PushDecorator(notification);
        notification = new SlackDecorator(notification);
        notification = new SMSDecorator(notification);
        notification.send("Hello");
    }
}

const main = new Main();
main.run();
