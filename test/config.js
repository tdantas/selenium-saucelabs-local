var cfg = module.exports;
/*

  SauceLabs Configuration  

*/
cfg.saucelabs = {
  desiredCapabilities: {
    browserName: 'chrome',
    version: '27',
    platform: 'XP',
    tags: ['ui', 'tdantas'],
    name: 'Test Title [ ' + new Date() + ']'
  },
  user: process.env.SAUCE_USERNAME   ||  'SAUCELABS_USER', 
  key:  process.env.SAUCE_ACCESS_KEY || 'SAUCELABS_KEY',
  port: 80,
  host: 'ondemand.saucelabs.com'
};

/*

  Local Selenium 

*/
cfg.local = {
  desiredCapabilities: { 
    browserName: 'firefox' 
  }
};

