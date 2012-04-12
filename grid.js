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

exports.get_grid = function () {

//  events.EventEmitter.call(this);

  this.grid = function (url) {
  var self = this;

    request(url, function (err, res, body) {

      if (err) {
	return console.err(err);
      }
      else {
	self.emit('data', body);
      }

    });
  }
}

util.inherits(exports.get_grid, events.EventEmitter);
