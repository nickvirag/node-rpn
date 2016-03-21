# node-rpn

node-rpn is a simple Javascript reverse polish calculator with a node module wrapper.

### Installation

1. Add `rpn.js` to your project's modules directory
2. Include via `var rpn = require('path/to/modules/rpn.js')`

### Usage

`evaluate(expression, callback)`: Evaluate a string

Example
```
var rpn = require('./rpn.js');

rpn.evaluate('6 7.5 + 2 - -3 +', function(res, err) {
  console.log('Response: ' + res);
  if (err.length != 0) { // err is an array
    console.log('Errors: ' + err);
  }
});
```

### Demo
Open demo directory
```
cd demo
```
Install dependencies
```
npm install
```
Start server
```
npm start
```
Open the demo URL
```
# Linux and OS X
open http://localhost:3000

# Windows
start http://localhost:3000
```

### License
Released under the MIT license. See `LICENSE.txt`
