var request = require('request')
  , events = require('events')
  , util = require('util');


exports.url = function (date) {
  if (date) {
    var date = new Date(date);
  }
  else {
    var date = new Date();
  }
  var year = date.getFullYear();
  var month = ('0' + (date.getMonth() + 1)).slice(-2);
  var day = ('0' + date.getDate()).slice(-2);

// url format http://gdx.mlb.com/components/game/mlb/year_2012/month_04/day_10/grid.json

  var url = [
    'http://gdx.mlb.com/components/game/mlb',
    '/year_',
    year,
    '/month_',
    month,
    '/day_',
    day,
    '/grid.json'
    ].join('');

    return url;
}

var parse = function (json) {

  try {
    var obj = JSON.parse(json);
  }
  catch (e) {
    return console.error(e);
  }


  var games = {};

  obj.data.games.game.forEach(function (value, key) {
    games[value.id] = {
      home: value.home_team_name,
      away: value.away_team_name,
      field: value.venue,
      time: value.event_time,
      status: value.status
    }
  });

  return games;

}

exports.get_grid = function (url, cb) {
  return request(url, function (err, res, body) {
    err ? console.error(err) : cb(parse(body));
  });
}
