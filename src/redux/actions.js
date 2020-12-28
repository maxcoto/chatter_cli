export const setUser = user => { return { type: 'SET_USER', user } }

export const notifySuccess = message => { return { type: 'NOTIFY_SUCCESS', message } }
export const notifyError   = message => { return { type: 'NOTIFY_ERROR',   message } }
export const closeNotify = ()        => { return { type: 'NOTIFY_CLOSE' } }

export const setLevels = levels => { return { type: 'SET_LEVELS', levels } }

export const setTeachers = teachers => { return { type: 'SET_TEACHERS', teachers } }
export const setCourses = courses => { return { type: 'SET_COURSES', courses } }
//[+add_action+]
