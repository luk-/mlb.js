var grid = require('./grid')

exports.url = function (game_id) {
  var game = 'gid_' + game_id.replace(/-|\//g, '_')
  var game_date = game_id.slice(0, 11)
  var year  = game_id.substring(0, 4)
  var month = game_id.substring(5, 7)
  var day   = game_id.substring(8, 10)

  var url = [
    'http://gd2.mlb.com/components/game/mlb',
    '/year_', year,
    '/month_', month,
    '/day_', day,
    '/', game
    ].join('')

  return url

}

exports.get = function (cb, date) {
  !cb ? cb = console.log : '' 
  return grid.get_grid(grid.url(date), cb)
}
