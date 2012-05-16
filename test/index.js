var test = require('tap').test
  , fs = require('fs')
  , nock = require('nock')
  , mlb = require('../lib/mlb')


var scope = nock('http://gd2.mlb.com')
                .get('/components/game/mlb/year_2012/month_04/day_16/gid_2012_04_16_balmlb_chamlb_1/game_events.xml')
                .replyWithFile(200, './remote/game_events.xml')
                .get('/components/game/mlb/year_2012/month_04/day_16/gid_2012_04_16_balmlb_chamlb_1/linescore.json')
                .replyWithFile(200, './remote/linescore.json')

var url = 'http://gd2.mlb.com/components/game/mlb/year_2012/month_04/day_16/gid_2012_04_16_balmlb_chamlb_1'
  , game = mlb.games.url('2012/04/16/balmlb-chamlb-1')

test('equality', function (t) {
  t.equal('string', 'string', 'equality')
  t.end()
});

test('valid game url', function (t) {
  t.equal(game, url, 'valid url')
  t.type(game, 'string', 'url is a string')
  t.end()
})

test('event parsing', function (t) {
  mlb.events(game, function (err, res, body) {
    var stream = fs.createReadStream('./fixtures/game_events.json', {encoding: 'utf8'})
    stream.on('data', function(data) {
      var body_json = JSON.stringify(body)
      t.equal(body_json, data, 'game events are parsing')
      t.type(body, 'object', 'events are an object')
      t.end()
    })
  })
  
})

test('score parsing', function (t) {
  mlb.score(game, function (err, res) {
    var stream = fs.createReadStream('./fixtures/score.json', {encoding: 'utf8'})
    stream.on('data', function(data) {
      var score_json = JSON.stringify(res)
      t.equal(score_json, data, 'score is being parsed')
      t.type(res, 'object', 'score is an object')
      t.end()
    })
  })

})


