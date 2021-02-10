import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as actionCreators from 'redux/actions'
import Main from './layouts/Main'

const mapStateToProps = state => {
  return {
    user: state.user,
    message: state.message,
    levels: state.levels,
    teachers: state.teachers,
		courses: state.courses,
		students: state.students,
		stats: state.stats,
		trials: state.trials,
		//[+add_reducer+]
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch)
}

const App = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Main)
)

export default App
