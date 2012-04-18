var http = require('http')
  , director = require('director')
  , mlb = require('./lib/mlb')
  , fs = require('fs')
  , request = require('request');

var router = new director.http.Router();

var server = http.createServer(function (req, res) {
  router.dispatch(req, res, function (err) {
    if (err) {
      res.writeHead(404);
      res.end();
    }
  });
});


//router.get(/\//, gg);
router.get(/\//, function () {
  var self = this;
  fs.readFile('./public/index.html', function (err, data) {
    self.res.writeHead(200, { 'Content-Type': 'text/html' })
    self.res.end(data);
  });
});

router.get(/events/, gg);


function gg() {
  var self = this;
  var game = mlb.games.url('2012/04/17/minmlb-nyamlb-1');
  //mlb.events(game, console.log, {limit: 10});

  mlb.events(game, function (err, res, body) {
  
  if (err) {
    console.log(err);
    self.res.writeHead(200, { 'Content-Type': 'text/plain' })
    self.res.end('error');
  }
  
  else {
    self.res.writeHead(200, { 'Content-Type': 'text/html' })
    self.res.end(JSON.stringify(body));
  }
    
  }, {limit: 2}
    );
}




server.listen(8000);
