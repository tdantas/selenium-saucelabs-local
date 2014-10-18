var webdriverio = require('webdriverio');
var request     = require('request');
var config      = require('./config');

var notifier    = none;

if(process.env.SAUCELABS) { 
  options = config.saucelabs;
  notifier = updateJob;
} else {
  options = config.local;
}

var client      = webdriverio.remote(options);
module.exports  = client;

client.addCommand("updateSauceLabsStatus", notifier); 

/*
  update job on saucelabs

*/

 function none(_, callback) {
  return callback(); 
}
 
function updateJob(passed, callback) {
  var urlTemplate = 'https://saucelabs.com/rest/v1/:USER/jobs/:SESSIONID';
  var user        = this.requestHandler.auth.user;
  var sessionID   = this.requestHandler.sessionID;
  
  var url = urlTemplate
    .replace(':USER', user)
    .replace(':SESSIONID', sessionID);
 
  var req ={
    url:      url,
    method:   'PUT',
    auth:     this.requestHandler.auth,
    headers:  { 'Content-Type': 'application/json; charset=UTF-8' },
    json:     { passed: passed }
  };

  request(req, then);
  function then(err, body) {
    if(err) { return callback(err); }
    callback();
  }

}

