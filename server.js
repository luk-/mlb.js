var http = require('http')
  , director = require('director')
  , mlb = require('./lib/mlb')
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


router.get(/\//, gg);


function gg() {
  var self = this;
  mlb.games.get(function (err, res, body) {
  
  if (err) {
    self.res.writeHead(200, { 'Content-Type': 'text/plain' })
    self.res.end('error');
  }
  
  else {
    self.res.writeHead(200, { 'Content-Type': 'text/html' })
    //self.res.end(data);  
    self.res.end('<script type="text/javascript">' + body + '</script>');
  }
    
  }
    );
}

//router.get(/\//, function () {
//  var self = this;
//  this.res.writeHead(200, { 'Content-Type': 'text/plain' })
//  console.log(this.req.headers);
//  //this.res.end('jah');
//
//  //mlb.games.get_2(function () {self.res.end}, '2012, 04, 16');
//
//  //mlb.games.get_2(self.res.end, '2012, 04, 16');
//  this.res.end(mlb.games.get_2(self.res.end));



//  mlb.games.get(function () {self.res.end;} );


//  request('http://www.google.com', function (err, res, body) {
//    self.res.end(body);
//    });



//});



server.listen(8000);

//mlb.games.get();
