var http = require('http');
var rpn = require('./rpn');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  rpn.evaluate('6 7.5 + 2 - -3 +', function(response, err) {
    if (err.length == 0) {
      res.end(response.toString());
    } else {
      res.end('Errors: ' + err.toString());
    }
  });
});
server.listen(3000);
