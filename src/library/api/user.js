import headers from './headers'
import URI from './service'

const user = {

  logout: function(callback){
    const options = {
      method: 'DELETE',
      headers: headers.get()
    }

    fetch(URI + 'logout', options)
    .then(response => callback)
  }
}

export default user
