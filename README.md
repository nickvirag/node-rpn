# node-rpn

node-rpn is a simple Javascript reverse polish calculator with a node module wrapper.

### Installation

1. Add `rpn.js` to your project's modules directory
2. Include via `var rpn = require('path/to/modules/rpn.js')`

### Usage

`evaluate(expression, callback)`: Evaluate a string

Example
```
var rpn = require('./rpn');

rpn.evaluate('6 7.5 + 2 - -3 +', function(err, result) {
  console.log('Result: ' + result);
  if (err.length != 0) { // err is an array
    console.log('Errors: ' + err);
  }
});
```

`evaluateReturnJson(expression, callback)`: Evaluate a string with web safe JSON response

Format
```
{
  status: string,
  expression: string,
  result: number,
  error: [string]
}
```

Example
```
var rpn = require('./rpn');

rpn.evaluateReturnJson('6 7.5 + 2 - -3 +', function(err, json) {

  /*
    '6 7.5 + 2 - -3 +' evaluates to {
      status: 'OK',
      expression: '6 7.5 + 2 - -3 +',
      result: 8.5,
      error: []
    }
  */

  console.log('Result: ' + json.result);
  console.log('Status: ' + json.status);
  if (status == 'ERROR') {
    console.log('Error: ' + json.error);
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
