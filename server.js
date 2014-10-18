var http    = require('http');
var static  = require('node-static');
var file    = new static.Server('./public');

module.exports = App;

function App(opts, onReady) {
  var log     = opts.log || console.log;
  var server  = http.createServer();
  var port    = opts.port;
  
  onReady = onReady || function nop() { };  
  server.on('request', onRequest);
 
  server.listen(port, onReady);
  
  function onRequest(request, response) {
    file.serve(request, response, afterServe); 
  
    function afterServe(err, res) {
      if (err) { 
        response.writeHead(err.status, err.headers);
        response.end();
      } else {
        log("> " + request.url + '-' + response.statusCode);
      }
    }
  }
}






