var os = require('os')

var LOCAL_HOSTS = { 4: [], 6: [] }
var interfaces = os.networkInterfaces()
for (var i in interfaces) {
  for (var j = 0; j < interfaces[i].length; j++) {
    var face = interfaces[i][j]
    if (face.family === 'IPv4') LOCAL_HOSTS[4].push(face.address)
    if (face.family === 'IPv6') LOCAL_HOSTS[6].push(face.address)
  }
}

module.exports = LOCAL_HOSTS
