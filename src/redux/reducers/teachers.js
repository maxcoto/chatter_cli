
const teachers = (state = [], action) => {
  switch (action.type) {
  case 'SET_TEACHERS':
    return action.teachers
  default:
    return state
  }
}
export default teachers
