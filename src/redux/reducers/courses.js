
const courses = (state = [], action) => {
  switch (action.type) {
  case 'SET_COURSES':
    return action.courses
  default:
    return state
  }
}
export default courses
