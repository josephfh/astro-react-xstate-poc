export enum NotificationDuration {
  DEFAULT = 'Default',
  LONG = 'Long',
  QUICK = 'Quick',
  USER_DISMISS = 'UserDismiss',
  PERMANENT = 'Permanent',
}

export enum NotificationType {
  DEFAULT = 'Default',
  WARNING = 'Warning',
  SUCCESS = 'Success',
  ERROR = 'Error',
}

export interface NotificationData {
  readonly duration: NotificationDuration
  readonly id: string
  readonly message: string
  readonly dynamicString?: string
  readonly timestamp: number
  readonly type: NotificationType
}
