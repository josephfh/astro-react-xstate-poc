import { getNotificationsStateMachineRef, getTestMessage } from '../../selectors'
import { useActor, useInterpret, useMachine, useSelector } from '@xstate/react'
import { FC, memo } from 'react'
import { motion } from 'framer-motion'
import SuccessIcon from '~icons/ic/round-check-circle-outline'
import WarningIcon from '~icons/ic/round-warning-amber'
import ErrorIcon from '~icons/ic/round-error-outline'
import CloseIcon from '~icons/ic/round-close'
import DefaultIcon from '~icons/ic/round-flight-takeoff'
import { NotificationType } from '../../machines'
import { rootState } from '../../context'
// import { useService } from '@xstate/react';
// const [rootState, sendRootState] = useInterpret(rootService);
// const [state] = useActor(rootService);
// const test = useRef(null);
// const test = useSelector(rootService, ({context}) => context.test )

// console.log(test)
// const test = rootService.state.value
// const test = '123132'

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
