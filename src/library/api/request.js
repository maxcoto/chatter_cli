import headers from './headers'
import URI from './service'

const request = {

  update: function(path, id, data, onSuccess, onError) {
    const options = { method: 'PUT', body: JSON.stringify(data) }
    this.genFetch(path + '/' + id, options, onSuccess, onError)
  },

  create: function(path, data, onSuccess, onError) {
    const options = { method: 'POST', body: JSON.stringify(data) }
    this.genFetch(path, options, onSuccess, onError)
  },

  delete: function(path, id, onSuccess, onError) {
    const options = { method: 'DELETE' }
    this.genFetch(path + '/' + id, options, onSuccess, onError)
  },

  all: function(path, onSuccess, onError) {
    const options = { method: 'GET' }
    this.genFetch(path, options, onSuccess, onError)
  },

  get: function(path, id, onSuccess, onError) {
    const options = { method: 'GET' }
    this.genFetch(path + '/' + id, options, onSuccess, onError)
  },

  genFetch: function(path, options, onSuccess, onError){
    options['headers'] = headers.get();

    var ok = true
    fetch(URI + path, options)
    .then((response) => {
      ok = !!response.ok
      return response.json()
    })
    .then((data) => {
      if (data.error) {
        onError(data.error)
      } else if(!ok){
        onError(data)
      } else {
        onSuccess(data)
      }
    })
  }  
}

export default request
