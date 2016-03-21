var express = require('express');
var router = express.Router();
var rpn = require('../../rpn.js');

router.post('/', function(req, res, next) {
  var data = req.body;
  if (data.expression) {
    rpn.evaluate(data.expression, function(err, response) {
      var pageData = {
        status: err.length == 0 ? 'OK' : 'ERROR',
        expression: data.expression,
        result: response,
        error: err
      };
      res.render('result', pageData);
    });
  } else {
    res.render('error', {
      message: 'Error: Missing paramters',
      error: {
        status: '',
        stack: ''
      }
    });
  }
});

module.exports = router;
