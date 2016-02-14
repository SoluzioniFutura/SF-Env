'use strict';

require('colors');

module.exports = function(options, defaultEnv){
  if (typeof options === 'string' && typeof defaultEnv === 'undefined'){
    defaultEnv = options;
    options    = null;
  }
  
  options = options || {
      environments: {
        development: { color: 'green' },
        staging: { color: 'yellow' },
        production: { color: 'blue' }
      }
    };

  defaultEnv = defaultEnv || Object.keys(options.environments)[0].toLowerCase();
  
  var env = process.env.NODE_ENV;
  if (!env) {
    console.log('NODE_ENV is', 'NOT SET'.red);
    console.log('Treating environment as', defaultEnv[options.environments[defaultEnv].color]);
  } else {
    env = env.toLowerCase();
    var envObj = options.environments[env];
    if (envObj){
      console.log('NODE_ENV =', env[envObj.color]);
    } else {
      console.log('NODE_ENV =', env.red);
      console.log('Unknown environment');
      console.log('Treating environment as', defaultEnv[options.environments[defaultEnv].color]);
      env = defaultEnv;
    }
  }
  
  process.env.NODE_ENV = env || defaultEnv;
};  
