var mlb = require('./lib/mlb');


//mlb.games.get(console.log, '2012, 04, 16');

//mlb.games.get(console.log);

//var game = mlb.games.url('2012/04/16/balmlb-chamlb-1');

//mlb.games.get_2(console.log, '2012, 04, 16');

//console.log(game);

var game = mlb.games.url('2012/04/17/minmlb-nyamlb-1');

mlb.events(game, console.log);

//mlb.games.get(console.log);
