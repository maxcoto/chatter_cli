
const trials = (state = [], action) => {
  switch (action.type) {
  case 'SET_TRIALS':
    return action.trials
  default:
    return state
  }
}
export default trials
