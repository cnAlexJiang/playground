var http = require('http');

http.createServer(function (req, res) {
  var promise = new Promise(function(resolve, reject) {
    reject(new Error("Broken."))
  })

  promise.info = {url: req.url}
}).listen(8080)

process.on('unhandledRejection', function (err, p) {
  if (p.info && p.info.url) {
    console.log('Error in URL', p.info.url)
  }
  console.error(err.stack)
})