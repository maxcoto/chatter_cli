const levels = (state = [], action) => {
  switch (action.type) {
  case 'SET_LEVELS':
    return action.levels
  default:
    return state
  }
}

export default levels
