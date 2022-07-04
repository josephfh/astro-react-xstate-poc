import { getNotificationsStateMachineRef } from '../../selectors'
import { useActor, useSelector } from '@xstate/react'
import { FC, memo } from 'react'
import { rootState } from '../../context'

const NotificationCreator: FC = memo(() => {
  const notificationsStateMachineRef = useSelector(rootState, getNotificationsStateMachineRef)
  const [_, sendNotificationsState] = useActor(notificationsStateMachineRef)

  return (
    <>
      <button
        className={'p-2 border border-red-600'}
        onClick={() =>
          sendNotificationsState({ type: 'create', message: 'Hi there!' })
        }>Create notification</button>
    </>
  )
})

export { NotificationCreator }
