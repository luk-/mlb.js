var grid = require('./grid');
var request = require('request');



exports.url = function (game_id) {
  var game = 'gid_' + game_id.replace(/-|\//g, '_');
  var game_date = game_id.slice(0, 11);
  var year  = game_id.substring(0, 4);
  var month = game_id.substring(5, 7);
  var day   = game_id.substring(8, 10);


  var url = [
    'http://gd2.mlb.com/components/game/mlb',
    '/year_', year,
    '/month_', month,
    '/day_', day,
    '/', game
    ].join('');

  return url;

}


//game_url('2012/04/13/sdnmlb-lanmlb-', console.log);

/*
* @api public
* @param optional {callback} cb
* @param optional {date} date
* ex: get(console.log, '2012, 04, 11');
*/

exports.get = function (cb, date) {
  return grid.get_grid(grid.url(date), cb)
}