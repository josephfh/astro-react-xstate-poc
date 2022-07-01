import { inspect } from '@xstate/inspect'
import { interpret } from 'xstate'
import { rootMachine } from './machines'

let isLocalhost: boolean

if (typeof window !== 'undefined') {
  isLocalhost = window?.location?.hostname === 'localhost' || window?.location?.hostname === '127.0.0.1'
  if (isLocalhost) {
    inspect({
      url: 'https://stately.ai/viz?inspect',
      iframe: false,
    })
  }
}

export const initService = () => {

  const service = interpret(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    rootMachine.withContext({}),
    { devTools: Boolean(isLocalhost) }
  )
  service.start()

  return service
}
