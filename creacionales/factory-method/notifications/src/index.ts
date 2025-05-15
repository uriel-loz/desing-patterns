import EmailFactory from "./factories/email.factoy";
import NotificationFactory from "./factories/notification.factory";
import PushFactory from "./factories/push.factory";
import SMSFactoy from "./factories/sms.factory";

const email = new EmailFactory();
const push = new PushFactory();
const sms = new SMSFactoy();

email.send();
push.send();
sms.send();