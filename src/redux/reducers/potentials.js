
const potentials = (state = [], action) => {
  switch (action.type) {
  case 'SET_POTENTIALS':
    return action.potentials
  default:
    return state
  }
}
export default potentials
