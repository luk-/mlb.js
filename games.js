var grid = require('./grid');

function grid_parse (json) {

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

function game_url (game_id, cb) {
  var game_date = game_id.slice(0, 11);
  var year  = game_id(0, 4);
  var month = game_id(5, 7);
  var day   = game_id(8, 10);

  var url = [
    '


/*
* @api public
* @param optional {callback} cb
* @param optional {date} date
* ex: get_games(console.log, '2012, 04, 11');
*/

var get_games = function (cb, date) {
  
  var ret_grid = new grid.get_grid();

  ret_grid.on('data', function (data) {

    var _data = grid_parse(data);
    cb ? cb(_data) : console.log(_data);

  });

  ret_grid.grid(grid.url(date));

}

