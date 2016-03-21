var express = require('express');
var router = express.Router();
var rpn = require('../../rpn.js');

router.post('/', function(req, res, next) {
  var data = req.body;
  if (req.body) {
    rpn.evaluate(data.expression, function(err, response) {
      res.render('result', {
        title: response.result,
        status: err.length == 0 ? 'OK' : 'ERROR',
        error: err
      });
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
