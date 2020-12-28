import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import user from './user'
import message from './message'
import levels from './levels'
import students from './students'
import teachers from './teachers'
//[+add_import+]
 
const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  user,
  message,
  students,
  levels,
  teachers,
	//[+add_reducer+]
})
export default rootReducer
