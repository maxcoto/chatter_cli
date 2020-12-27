const message = (state = [], action) => {
  switch (action.type) {
  case 'NOTIFY_SUCCESS':
    return { type: "success", text: action.message, open: true }
  case 'NOTIFY_ERROR':
    return { type: "error", text: action.message, open: true }
  case 'NOTIFY_CLOSE':
    return { type: "", text: "", open: false }
  default:
    return state
  }
}

export default message
