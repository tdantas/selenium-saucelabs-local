var cfg = module.exports;


cfg.saucelabs = {
  desiredCapabilities: {
    browserName: 'chrome',
    version: '27',
    platform: 'XP',
    tags: ['widget'],
    name: 'TSL Registration Widget [ ' + new Date() + ']'
  },
  user: process.env.SAUCE_USERNAME   ||  'SAUCELABS_USER', 
  key:  process.env.SAUCE_ACCESS_KEY || 'SAUCELABS_KEY',
  port: 80,
  host: 'ondemand.saucelabs.com'
};

cfg.local = {
  desiredCapabilities: { browserName: 'firefox' }
};

