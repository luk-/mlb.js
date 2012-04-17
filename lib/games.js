var grid = require('./grid');



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
* ex: get_games(console.log, '2012, 04, 11');
*/

exports.get = function (cb, date) {
  
  var ret_grid = new grid.get_grid();

  ret_grid.on('data', function (data) {

    var _data = grid.parse(data);
    cb ? cb(_data) : console.log(_data);

  });

  ret_grid.grid(grid.url(date));

}

//get_games(console.log, '2012, 04, 16');

//var game1 = game_url('2012/04/16/sdnmlb-colmlb-1', 'game_events.xml');

//console.log(game1);
