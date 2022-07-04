import { getTestMessage } from '../../selectors'
import { useSelector } from '@xstate/react'
import { FC, memo } from 'react'

import { rootState } from '../../context'
const Message: FC = memo(() => {
  const message = useSelector(rootState, getTestMessage)
  return (
    <>
      {message}
      <button
        className={'p-1 rounded-lg border text-sm border-gray-600'}
        onClick={() =>
          rootState.send({ type: 'update' })
        }>Change</button>
    </>
  )
})

export { Message }
