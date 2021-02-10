
const scheduleTime = function(datetime){
  const dt = datetime.split("T")
  const d = dt[0]
  const t = dt[1].split(":")
  const h = t[0]
  const m = t[1]

  return d + " @ " + h + ":" + m
}

module.exports = {
  scheduleTime
};
