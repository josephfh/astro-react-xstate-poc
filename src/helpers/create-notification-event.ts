import { NotificationData, NotificationDuration, NotificationType } from '../machines/notifications/notifications.types'
import { v4 as uuid } from './uuid'

type NotificationEvent = {
  readonly type: 'createNotification'
  readonly value: NotificationData[]
}

const createNotificationEvent = (payload: Partial<NotificationData>): NotificationEvent => {
  const notificationPayload: NotificationData = {
    duration: NotificationDuration.DEFAULT,
    id: uuid(),
    timestamp: Date.now(),
    type: NotificationType.DEFAULT,
    ...(payload as Omit<NotificationData, 'id' | 'duration' | 'timestamp' | 'type'>),
  }

  return { type: 'createNotification', value: [notificationPayload] }
}

const createSuccessNotification = (payload: Partial<Omit<NotificationData, 'type'>>) =>
  createNotificationEvent({
    ...payload,
    type: NotificationType.SUCCESS,
  })

const createErrorNotification = (payload: Partial<Omit<NotificationData, 'type'>>) =>
  createNotificationEvent({
    ...payload,
    type: NotificationType.ERROR,
  })

export { createNotificationEvent, createSuccessNotification, createErrorNotification }
