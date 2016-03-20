# node-rpn

node-rpn is a simple Javascript RPN calculator with a node module wrapper.

### Installation

1. Add `rpn.js` to your project's modules directory
2. Include to files with `require('path/to/modules/rpn.js')`

### Usage

`evaluate(expression, callback)`: Evaluate a string
Example:
```
var rpn = require('./rpn.js');

rpn.evaluate('6 7 + 2 -', function(response, err) {
  if (err.length == 0) { // err is an array, not a string
    res.end(response);
  } else {
    res.end('Errors: ' + err.toString());
  }
});
```

### Demo
Run the demo
```
node demo
```
Open the demo URL (Linux and OS X)
```
open http://localhost:3000
```
Windows
```
start http://localhost:3000
```

### License
Released under the MIT license. See `LICENSE.txt`
