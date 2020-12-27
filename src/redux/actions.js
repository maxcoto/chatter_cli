export const setUser = user => { return { type: 'SET_USER', user } }

export const notifySuccess = message => { return { type: 'NOTIFY_SUCCESS', message } }
export const notifyError   = message => { return { type: 'NOTIFY_ERROR',   message } }
export const closeNotify = ()        => { return { type: 'NOTIFY_CLOSE' } }