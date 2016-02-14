console.log('Test 1');
process.env.NODE_ENV = undefined;
console.log('No Params');
console.log('NODE_ENV =',process.env.NODE_ENV);
console.log('-------------------------------------------------------');
require('./../lib/sf-env')();
console.log('-------------------------------------------------------');
console.log();

console.log('Test 2');
process.env.NODE_ENV = 'development';
console.log('No Params');
console.log('NODE_ENV =',process.env.NODE_ENV);
console.log('-------------------------------------------------------');
require('./../lib/sf-env')();
console.log('-------------------------------------------------------');
console.log();

console.log('Test 3');
process.env.NODE_ENV = 'staging';
console.log('No Params');
console.log('NODE_ENV =',process.env.NODE_ENV);
console.log('-------------------------------------------------------');
require('./../lib/sf-env')();
console.log('-------------------------------------------------------');
console.log();

console.log('Test 4');
process.env.NODE_ENV = 'production';
console.log('No Params');
console.log('NODE_ENV =',process.env.NODE_ENV);
console.log('-------------------------------------------------------');
require('./../lib/sf-env')();
console.log('-------------------------------------------------------');
console.log();

console.log('Test 5');
process.env.NODE_ENV = 'unknown env';
console.log('No Params');
console.log('NODE_ENV =',process.env.NODE_ENV);
console.log('-------------------------------------------------------');
require('./../lib/sf-env')();
console.log('-------------------------------------------------------');
console.log();

console.log('Test 6');
process.env.NODE_ENV = 'unknown env';
console.log('Default to staging');
console.log('NODE_ENV =',process.env.NODE_ENV);
console.log('-------------------------------------------------------');
require('./../lib/sf-env')('staging');
console.log('-------------------------------------------------------');
console.log();

console.log('Test 7');
process.env.NODE_ENV = 'unknown env';
console.log('Custom environment set, no default');
console.log('NODE_ENV =',process.env.NODE_ENV);
console.log('-------------------------------------------------------');
require('./../lib/sf-env')({
  fist:{color:'cyan'},
  second:{color:'magenta'}
});
console.log('-------------------------------------------------------');
console.log();

console.log('Test 8');
process.env.NODE_ENV = 'second';
console.log('Custom environment set, no default');
console.log('NODE_ENV =',process.env.NODE_ENV);
console.log('-------------------------------------------------------');
require('./../lib/sf-env')({
  fist:{color:'cyan'},
  second:{color:'magenta'}
});
console.log('-------------------------------------------------------');
console.log();

console.log('Test 9');
process.env.NODE_ENV = 'unknown env';
console.log('Custom environment set, default to second');
console.log('NODE_ENV =',process.env.NODE_ENV);
console.log('-------------------------------------------------------');
require('./../lib/sf-env')({
  fist:{color:'cyan'},
  second:{color:'magenta'}
}, 'second');
console.log('-------------------------------------------------------');
