var assert = require('chai').assert;
var client = require('./client');
var App    = require('../server');

describe('Demo Page', function() {
  this.timeout(99999999);
  var allPassed = true;
  
  before(function startServer(done) {
    App({ 
      log: function noop(){ },
      port: 8000
    }, done);
  });
  
  before(function initClient(done) {
    client.init(done);
  });

  afterEach(function(done) {
    allPassed = allPassed && this.currentTest.state === 'passed';
    done();  
  });

  after(function endClient(done){
    client
      .updateSauceLabsStatus(allPassed)
      .end(done);
  });

  it('contains title', function(done) {
    client
      .url('http://me.local:8000/index.html')
      .getTitle(assertTitle)
      .call(done);
 
      function assertTitle(err, title) {
        assert.notOk(err);
        assert.equal(title, 'Demo Title');
      }
  }); 

});
