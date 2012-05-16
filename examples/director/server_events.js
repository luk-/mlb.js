var http = require('http')
  , director = require('director')
  , mlb = require('../../lib/mlb')
  , fs = require('fs')

var router = new director.http.Router()

var server = http.createServer(function (req, res) {
  router.dispatch(req, res, function (err) {
    if (err) {
      res.writeHead(404)
      res.end()
    }
  })
})


router.get(/\//, function () {
  var self = this
  fs.readFile('./public/index.html', function (err, data) {
    self.res.writeHead(200, { 'Content-Type': 'text/html' })
    self.res.end(data)
  })
})

router.get(/events/, game_events)


function game_events() {
  var self = this
  var game = mlb.games.url('2012/04/17/minmlb-nyamlb-1')
  mlb.events(game, function (err, res, body) {
    if (err) {
      console.err(err)
      self.res.writeHead(200, { 'Content-Type': 'text/plain' })
      self.res.end('error')
    }
    else {
      self.res.writeHead(200, { 'Content-Type': 'text/html' })
      self.res.end(JSON.stringify(res))
    }
    
  }, {limit: 10})
}


server.listen(8000)
