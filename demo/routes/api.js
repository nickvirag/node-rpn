var express = require('express');
var rpn = require('../../rpn.js');
var router = express.Router();

router.get('/evaluate', function(req, res, next) {
  var data = req.query;

  if (data.expression) {
    rpn.evaluateReturnJson(data.expression, function(err, json) {
      res.send(json);
    });
  } else {
    var json = {
      status: 'ERROR',
      result: 0.0,
      error: ['Missing arguments']
    };
    res.send(json);
  }
});

module.exports = router;
