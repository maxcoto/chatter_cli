import user from './api/user'
import headers from './api/headers'
import request from './api/request'

const API = {
  ...user,
  ...request,

  configure: function(token){ headers.set(token) }
}

export default API
