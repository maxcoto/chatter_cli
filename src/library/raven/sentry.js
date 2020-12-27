if(process.env.REACT_APP_RAVEN) {
  window.Raven.config(process.env.REACT_APP_RAVEN).install()  
}

export default {}