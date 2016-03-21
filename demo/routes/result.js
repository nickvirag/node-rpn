var express = require('express');
var router = express.Router();
var rpn = require('../../rpn.js');

router.post('/', function(req, res, next) {
  var data = req.body;
  if (data.expression) {
    rpn.evaluateReturnJson(data.expression, function(err, json) {
      res.render('result', json);
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
