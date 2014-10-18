var App = require('./server');

var logger = console.log;
var port   = 8000;

App({ log: logger, port: port }, function(err) {
  if(err) { return console.log(err); }
   console.log('Server Running ' + port);
});
