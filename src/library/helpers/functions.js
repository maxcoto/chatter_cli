
const formatDateTime = function(datetime){
  if( !datetime ) return "";

  const dt = datetime.split("T")
  const d = dt[0]
  const t = dt[1].split(":")
  const h = t[0]
  const m = t[1]

  return d + " @ " + h + ":" + m
}

const formatTime = function(datetime){
  if( !datetime ) return "";
  const t = datetime.split("T")[1].split(":")
  const h = t[0]
  const m = t[1]

  return h + ":" + m
}

module.exports = {
  formatDateTime,
  formatTime
};
