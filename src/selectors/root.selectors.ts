import { rootMachine } from '../machines'
import { StateFrom } from 'xstate'

const createSelector = <T>(selector: (state: StateFrom<typeof rootMachine>) => T) => selector

/** Selectors */
export const getTestMessage = createSelector((state) => state.context.test)
export const getNotificationsStateMachineRef = createSelector((state) => state.context.notificationsStateMachineRef)