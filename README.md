#Soluzioni Futura Enviroments
Log the current NODE_ENV, checking if it is one of supported ones for the application. If it's is not, overrides it with a default one.

1 - you can fully customize your environment set and the default environment if NODE_ENV is not set:
```
//setting up environment set
var environmentSet = {
 environments: {
   development: { color: 'green' },
   staging: { color: 'yellow' },
   production: { color: 'blue' }
 }
};

//requiring module and passing environment set and the default environment
require('sf-env')(environmentSet, 'staging');
```

2 - you can just customize the environment set without specifying the default environment (first one will be the default one):
```
//setting up environment set
var environmentSet = {
 environments: {
   development: { color: 'green' },
   staging: { color: 'yellow' },
   production: { color: 'blue' }
 }
};

//requiring module and passing environment set (default environment will be 'development')
require('sf-env')(environmentSet);
```

3 - you can use default environment set (by default the environmentSet object is equal to the example above) and specify only the default environment
```
//requiring module and passing default environment
require('sf-env')('development');
```

4 - you can use default environment set and first of them as default environment if NODE_ENV is not set
```
//requiring module and calling it with no arguments
require('sf-env')();
```
