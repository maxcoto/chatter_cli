import React from 'react'
import PropTypes from 'prop-types'
import API from 'library/API'

class Auth extends React.Component {
  constructor(props) {
    super(props)
    this.state = { disable: true }
  }

  componentDidMount() {
    if(!localStorage.getItem('login')){
      this.setState({ disable: false })
    }
  }

  signIn() {
    const self = this
    const data = { email: "maxi@chloe.com", password: "123456" }
    API.signIn(data, function(user) {
      self.props.setUser(user)
    })
    localStorage.setItem('login', true)
  }

  render() {
    const { disable } = this.state
    return (
      <div className="site-wrapper">
        <div className="center">
          <div className="text-center">
            <img src="/static/media/balon.b77c228e.png" alt="logo" style={{ width: '10%' }}/>
            <h1 className="cover-heading">Chatter Admin</h1>
          </div>
        </div>
        <p className="footer-center" id='logo'>by Maxiland.</p>
      </div>
    )
  }
}

Auth.propTypes = {
  setUser: PropTypes.func.isRequired
}

export default Auth

//<Button onClick={this.signIn.bind(this)} />
