var operators = ['+', '-', '*', '/', '%', '^', 'root'];

var calculate = function(firstTerm, secondTerm, operator) {
  var response = 0;
  switch(operator) {
    case operators[0]: // add
    case operators[1]: // subtract
    case operators[2]: // multiply
    case operators[3]: // divide
    case operators[4]: // modulo
      response = eval(firstTerm + operator + secondTerm);
      break;
    case operators[5]: // exponent
      response = Math.pow(firstTerm, secondTerm);
      break;
    case operators[6]: // root
      response = Math.pow(firstTerm, 1.0 / secondTerm);
      break;
    default: // unsupported operation
      console.log('Unsupported operation ' + operator);
      break;
  }
  return response;
};

exports.evaluate = function(expression, callback) {

  var expression = expression.split(' ');
  var stack = [], err = [];

  expression.forEach(function(object) {
    if (operators.indexOf(object) != -1) {
      var secondTerm = stack.pop();
      var firstTerm = stack.pop();
      stack.push(calculate(firstTerm, secondTerm, object));
    } else if (!isNaN(object)) {
      stack.push(Number(object));
    } else {
      err.push('Invalid character: ' + object);
    }
  });

  if (stack.length != 1) {
    err.push('Invalid number of objects');
  }

  callback(stack[0] || 0.0, err);
};
