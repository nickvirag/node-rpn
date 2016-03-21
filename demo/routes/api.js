var express = require('express');
var rpn = require('../../rpn.js');
var router = express.Router();

router.get('/evaluate', function(req, res, next) {

  var json = {
    status: 'OK',
    result: 0.0,
    error: []
  };

  var data = req.query;

  if (data.expression) {
    rpn.evaluate(data.expression, function(response, err) {
      if (err.length != 0) {
        json.status = 'ERROR';
        json.error = err;
      }
      json.result = response;

      res.send(json);
    });
  } else {
    json.status = 'ERROR';
    json.error.push('Missing arguments');

    res.send(json);
  }
});

module.exports = router;
