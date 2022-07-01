import { NotificationData, notificationsMachine } from '../../machines/notifications'
import { ActorRefFrom, assign, createMachine, spawn } from 'xstate'

export const rootMachine = createMachine(
  {
    id: 'rootState',
    tsTypes: {} as import("./root.machine.typegen").Typegen0,
    schema: {
      context: {} as {
        test?: string
        notificationsStateMachineRef: ActorRefFrom<typeof notificationsMachine>
      },
      events: {} as
        | { type: 'createNotification'; value: NotificationData[] }
        | { type: 'update' }
    },
    initial: 'start',
    states: {
      start: {
        entry: ['assignWelcomeToTest', 'spawnNotificationsStateMachine'],
        always: 'idle'
      },
      idle: {
        on: {
          createNotification: {
            actions: ['createNotification'],
          },
          update: {
            actions: ['changeMessage'],
          }
        },
      }
    },
  },
  {
    actions: {
      assignWelcomeToTest: assign((context, event) => ({
        test: `Hello there`
      })),
      changeMessage: assign((context, event) => ({
        test: `Hello now ${new Date().toLocaleTimeString()}`
      })),
      spawnNotificationsStateMachine: assign((_) => ({
        notificationsStateMachineRef: spawn(notificationsMachine, 'notificationsState'),
      })),
    },
  }
)
