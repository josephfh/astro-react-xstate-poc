import { assign, createMachine } from 'xstate'
import { NotificationData, NotificationDuration, NotificationType } from './notifications.types'

export const notificationsMachine = createMachine(
  {
    id: 'notificationsState',
    tsTypes: {} as import('./notifications.machine.typegen').Typegen0,
    schema: {
      context: {} as {
        notifications: NotificationData[]
      },
      events: {} as
        | { type: 'create'; message: string ; duration?: NotificationDuration; notificationType?: NotificationType }
        | { type: 'remove'; id: string }
        | { type: 'removeAll' }
        | { type: 'removeLast' },
    },
    context: {
      notifications: [],
    },
    on: {
      create: {
        actions: ['createNotification'],
      },
      remove: {
        actions: 'removeNotification',
      },
      removeLast: {
        actions: 'removeLastNotification',
      },
      removeAll: {
        actions: 'removeAllNotifications',
      },
    },
    initial: 'start',
    states: {
      start: {},
    },
  },
  {
    actions: {
      createNotification: assign((context, event) => ({
        notifications: [
          ...context.notifications,
          {
            duration:  event.duration ? event.duration : NotificationDuration.DEFAULT,
            id: Date.now().toString(),
            message: event.message,
            timestamp: Date.now(),
            type: event.notificationType ? event.notificationType : NotificationType.DEFAULT,
          }
        ],
      })),
      removeNotification: assign((context, event) => ({
        notifications: context.notifications.filter((notification) => notification.id !== event.id),
      })),
      removeLastNotification: assign((context) => ({
        notifications: context.notifications.slice(0, context.notifications.length - 1),
      })),
      removeAllNotifications: assign((_) => ({
        notifications: [],
      })),
    },
  }
)
