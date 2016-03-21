# node-rpn

node-rpn is a simple Javascript reverse polish calculator with a node module wrapper.

## Sections
* [Installation](#installation)
* [Usage](#usage)
* [Demo Features](#demo_features)
* [Demo Installation](#demo_installation)
* [License](#license)

## <a name="installation"></a> Installation

1. Add `rpn.js` to your project's modules directory
2. Include via `var rpn = require('path/to/modules/rpn.js')`

## <a name="usage"></a> Usage

### evaluate(expression, callback)
Evaluate a string and return a number.

Example:
```
var rpn = require('./rpn');

rpn.evaluate('6 7.5 + 2 - -3 +', function(err, result) {
  console.log('Result: ' + result);
  if (err.length != 0) { // err is an array
    console.log('Errors: ' + err);
  }
});
```

### evaluateReturnJson(expression, callback)
Evaluate a string and return a JSON formatted response.

Response format:
```
{
  status: string, // 'OK' or 'ERROR'
  expression: string,
  result: number,
  error: [string] // [] if no errors
}
```

Example:
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

## <a name="demo_features"></a> Demo Features
The demo showcases the following features in addition to the rpn module:
* Express.js usage and routing
* Server-side and client-side field validation
* Asynchronous form submission via jQuery with pure HTML fallback
* DOM manipulation via jQuery
* JSON object creation and manipulation

## <a name="demo_installation"></a> Demo Installation

Open demo directory:
```
cd demo
```
Install dependencies:
```
npm install
```
Start server:
```
npm start
```
Open the demo URL:
```
# Linux and OS X
open http://localhost:3000

# Windows
start http://localhost:3000
```

## <a name="license"></a> License
RPN module and demo both released under the MIT license. See `LICENSE.txt`
