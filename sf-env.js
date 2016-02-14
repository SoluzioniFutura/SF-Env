'use strict';

require('colors');

module.exports = function(environmentSet, defaultEnv){
  if (typeof environmentSet === 'string' && typeof defaultEnv === 'undefined'){
    defaultEnv     = environmentSet;
    environmentSet = null;
  }

  environmentSet = environmentSet || {
        development: { color: 'green' },
        staging: { color: 'yellow' },
        production: { color: 'blue' }
    };

  defaultEnv = defaultEnv || Object.keys(environmentSet)[0].toLowerCase();
  
  var env = process.env.NODE_ENV;
  if (!env) {
    console.log('NODE_ENV is', 'NOT SET'.red);
    console.log('Treating environment as', defaultEnv[environmentSet[defaultEnv].color]);
  } else {
    env = env.toLowerCase();
    var envObj = environmentSet[env];
    if (envObj){
      console.log('NODE_ENV =', env[envObj.color]);
    } else {
      console.log('NODE_ENV =', env.red);
      console.log('Unknown environment');
      console.log('Treating environment as', defaultEnv[environmentSet[defaultEnv].color]);
      env = defaultEnv;
    }
  }
  
  process.env.NODE_ENV = env || defaultEnv;
};  
