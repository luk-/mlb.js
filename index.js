var mlb = require('./lib/mlb.js');


//mlb.games.get(console.log, '2012, 04, 16');

var game = mlb.games.url('2012/04/16/balmlb-chamlb-1');


//console.log(game);

mlb.events(game, console.log, {limit: 10});
