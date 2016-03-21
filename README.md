# node-rpn

node-rpn is a simple Javascript Reverse Polish Notation calculator wrapped in a node module.

## Sections
* [About RPN](#about_rpn)
* [Installation](#installation)
* [Usage](#usage)
* [Syntax](#syntax)
* [Demo Features](#demo_features)
* [Demo Installation](#demo_installation)
* [Known Issues](#known_issues)
* [License](#license)

## <a name="about_rpn"></a> About RPN

Reverse Polish Notation (RPN) is a stack-based mathematical notation where operators follow the operands.

Here is `3 + 4` in RPN:

`3 4 +` => `7`

Here is a more complicated equation in RPN:

`3 4 + 2 -` => `5`

This is the breakdown:

```
3 4 + 2 -
(3 4 +) 2 -
7 2 -
5
```

Go to [Syntax](#syntax) for more examples.

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

## <a name="syntax"></a> Syntax
This node module supports negatives and decimals. The following are all valid expressions:

Expression | Evaluation
--- | ---
`100 2 *`  | `200`
`-15 5 / 2.1 -` | `-5.1`
`6 7.5 + 2 - -3 +` | `8.5`
`5 2 ^` | `25`
`25 2 root` | `5`
`14 5 %` | `4`

Here is a complete list of all supported operators:

Operator | Function
--- | ---
`+` | add
`-` | subtract
`|` | multiply
`/` | divide
`^` | power
`root` | root
`%` | modulo

## <a name="demo_features"></a> Demo Features
The demo showcases the following features in addition to the rpn module:
* Express.js usage and routing
* Server-side and client-side form field validation
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

## <a name="known_issues"></a> Known Issues
* No graceful handling of out-of-scope numbers

## <a name="license"></a> License
RPN module and demo both released under the MIT license. See `LICENSE.txt`
