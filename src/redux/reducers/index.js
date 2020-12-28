import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import user from './user'
import message from './message'
import levels from './levels'
import teachers from './teachers'
import courses from './courses'
import students from './students'
//[+add_import+]
 
const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  user,
  message,
  levels,
  teachers,
	courses,
	students,
	//[+add_reducer+]
})
export default rootReducer
