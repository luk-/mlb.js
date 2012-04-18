var test = require('tap').test
  , mlb = require('../lib/mlb')


//  test ('check for valid game url', function (t) {
//
//    t.equal(mlb.games.url('2012/04/16/balmlb-chamlb-1'), 'http://gd2.mlb.com/components/game/mlb/year_2012/month_04/day_16/gid_2012_04_16_balmlb_chamlb_1')
//
//  })
//
//  t.end()
//


test('equality', function (t) {
  t.equal('string', 'string', 'equality')
  t.end()
});

test('valid game url', function (t) {
  var url = 'http://gd2.mlb.com/components/game/mlb/year_2012/month_04/day_16/gid_2012_04_16_balmlb_chamlb_1'
  t.equal(mlb.games.url('2012/04/16/balmlb-chamlb-1'), url, 'valid url')
  t.type(mlb.games.url('2012/04/16/balmlb-chamlb-1'), 'string', 'url is a string')
  t.end()
})

