export interface Notification {
    send(): void,
    read(): void,
}

export enum NotificationType {
    EMAIL = 'email',
    SMS = 'sms',
    PUSH = 'push',
}