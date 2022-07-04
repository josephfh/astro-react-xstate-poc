import { getNotifications, getNotificationsStateMachineRef } from '../../selectors'
import { useSelector } from '@xstate/react'
import { FC, memo } from 'react'
import { NotificationsProps } from './notifications.types'
import { motion } from 'framer-motion'
import SuccessIcon from '~icons/ic/round-check-circle-outline'
import WarningIcon from '~icons/ic/round-warning-amber'
import ErrorIcon from '~icons/ic/round-error-outline'
import CloseIcon from '~icons/ic/round-close'
import DefaultIcon from '~icons/ic/round-flight-takeoff'
import { NotificationType } from '../../machines'
import { rootState } from '../../context'

const Notifications: FC<NotificationsProps> = memo(() => {
  const notificationsStateMachineRef = useSelector(rootState, getNotificationsStateMachineRef)
  const notifications = useSelector(notificationsStateMachineRef, getNotifications)
  return (
    <>
      <div
        aria-live='assertive'
        className='fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start z-50'
      >
        <>
          <div
            aria-live='assertive'
            className='fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start z-50'
          >
            <div className='w-full flex flex-col items-center space-y-4 sm:items-end'>
              {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}

              {notifications.map((notification) => (
                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  initial={{ opacity: 0, y: 20 }}
                  exit={{ y: -10, opacity: 0 }}
                  key={notification.id}
                  className='max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden'
                >
                  <div className='p-4'>
                    <div className='flex items-start'>
                      <div className='flex-shrink-0'>
                        {notification.type === NotificationType.ERROR && (
                          <ErrorIcon className='h-6 w-6 text-red-400' aria-hidden='true' />
                        )}
                        {notification.type === NotificationType.SUCCESS && (
                          <SuccessIcon className='h-6 w-6 text-green-400' aria-hidden='true' />
                        )}
                        {notification.type === NotificationType.WARNING && (
                          <WarningIcon className='h-6 w-6 text-yellow-400' aria-hidden='true' />
                        )}
                        {notification.type === NotificationType.DEFAULT && (
                          <DefaultIcon className='h-6 w-6 text-gray-400' aria-hidden='true' />
                        )}
                      </div>
                      <div className='ml-3 w-0 flex-1 pt-0.5'>
                        <p className='mt-1 text-sm text-gray-500'>{notification.message}</p>
                      </div>
                      <div className='ml-4 flex-shrink-0 flex'>
                        <button
                          type='button'
                          className='bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                          onClick={() => {
                            notificationsStateMachineRef.send({ type: 'remove', id: notification.id })
                          }}
                        >
                          <span className='sr-only'>Close</span>
                          <CloseIcon className='h-5 w-5' aria-hidden='true' />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </>
      </div>
    </>
  )
})

export { Notifications }
