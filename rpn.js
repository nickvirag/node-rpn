var operators = ['+', '-', '*', '/', '^', 'root', '%'];

var calculate = function(firstTerm, secondTerm, operator) {
  var response = 0;
  switch(operator) {
    case operators[0]: // add
      response = firstTerm + secondTerm;
      break;
    case operators[1]: // subtract
      response = firstTerm - secondTerm;
      break;
    case operators[2]: // multiply
      response = firstTerm * secondTerm;
      break;
    case operators[3]: // divide
      response = firstTerm / secondTerm;
      break;
    case operators[4]: // exponent
      response = Math.pow(firstTerm, secondTerm);
      break;
    case operators[5]: // root
      response = Math.pow(firstTerm, 1 / secondTerm);
      break;
    case operators[6]: // modulo
      response = firstTerm % secondTerm;
    default:
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

  if (stack.length == 1) {
    callback(stack[0], err);
  } else {
    err.push('Invalid number of objects');
    callback(null, err);
  }
};
