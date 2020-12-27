var token = "";

const headers = {

  set: function(t) {
    token = t;
  },

  get: function() {
    return {
      'X-CSRF-Token': token,
      'Content-Type': 'application/json',
      "Accept": "application/json"
    };
  }
}

export default headers
