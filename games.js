var grid = require('./grid');

function grid_parse(json) {

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

  //self.emit('data', games);
  //console.log(obj.data.games);
  //console.log(games);
  return games;

}

var get_games = function (cb) {
  
  var ret_grid = new grid.get_grid();

  ret_grid.on('data', function (data) {

    var _data = grid_parse(data);
    cb ? cb(_data) : console.log(_data);

  });

  ret_grid.grid(grid.url());

}

get_games();
