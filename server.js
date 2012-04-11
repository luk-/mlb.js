var http = require('http'),
    director = require('director');

var router = new director.http.Router();

var server = http.createServer(function (req, res) {
  router.dispatch(req, res, function (err) {
    if (err) {
      res.writeHead(404);
      res.end();
    }
  });
});

var mlb = {};

//mlb.

router.get(/\//, function () {
  this.res.writeHead(200, { 'Content-Type': 'text/plain' })
  console.log(this.req.headers);
  this.res.end('jah');
});




server.listen(80);
