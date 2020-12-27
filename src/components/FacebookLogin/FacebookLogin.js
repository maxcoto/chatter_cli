// npm install "react-facebook-login": "^4.1.0",

import React from 'react'
import PropTypes from 'prop-types'
import API from 'library/API'
import FacebookLogin from 'react-facebook-login'

class FacebookLogin extends React.Component {
  constructor(props) {
    super(props)
    this.state = { disable: true}
  }

  componentDidMount() {
    if(!localStorage.getItem('login'))
      this.setState({disable: false})
  }

  facebookResponse(response) {
    const self = this
    API.signin(response, function(user) {
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
            <h1 className="cover-heading">ProdEvolution</h1>
            <p className="lead">Competí con tus amigos en la apasionante Superliga Argentina, suma puntos y convertite en el campeón de la fecha.<br/>Podes ganar importantes premios.</p>
            <FacebookLogin
              autoLoad={true}
              appId='711138055913158'
              textButton='   Inicio con Facebook'
              fields='name, email, picture.type(large), id'
              cssClass="btn btn-login"
              icon="fa-facebook"
              isDisabled={disable}
              callback={this.facebookResponse.bind(this)}
            />
          </div>
        </div>
        <p className="footer-center" id='logo'>by Fundamentalistas.</p>
      </div>
    )
  }
}

FacebookLogin.propTypes = {
  setUser: PropTypes.func.isRequired
}

export default FacebookLogin
