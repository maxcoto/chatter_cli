
const stats = (state = [], action) => {
  switch (action.type) {
  case 'SET_STATS':
    return action.stats
  default:
    return state
  }
}
export default stats
