import { notificationsMachine } from '../machines'
import { StateFrom } from 'xstate'

const createSelector = <T>(selector: (state: StateFrom<typeof notificationsMachine>) => T) => selector

/** Selectors */
export const getNotifications = createSelector((state) => state.context.notifications)
