#Soluzioni Futura Enviroments.
Log the current NODE_ENV, checking if it is one of supported ones for the application. If it's is not, overrides it with a default one.

You can fully customize your options and you default environment:
```
//setting up options
var options = {
 environments: {
   development: { color: 'green' },
   staging: { color: 'yellow' },
   production: { color: 'blue' }
 }
};

//requiring module and passing options and default env if NODE_ENV is not set.
require('sf-env')(options, 'staging');
```

Or you can just customize your options without specifying the default environment (first one will be the default one):
```
//setting up options
var options = {
 environments: {
   development: { color: 'green' },
   staging: { color: 'yellow' },
   production: { color: 'blue' }
 }
};

//requiring module and passing just options, if NODE_ENV is not set use the first environment as default ('development').
require('sf-env')(options);
```

or you can use default environment set (by default the options object is equal to the example above)

```
//requiring module and passing default env if NODE_ENV is not set.
require('sf-env')('development');
```

```
//requiring module and calling it with no arguments, assuming that the default env is the first of the default options.environments ('developments')
require('sf-env')();
```
