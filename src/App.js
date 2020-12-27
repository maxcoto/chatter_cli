import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import * as actionCreators from 'redux/actions'
import Main from './layouts/Main'

const mapStateToProps = state => {
  return {
    user: state.user,
    students: state.students,
    message: state.message,
    //{{expand}}
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(actionCreators, dispatch)
}

const App = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Main)
)

export default App
