var request = require('request')


exports.url = function (date) {
  date ? date = new Date(date) : date = new Date()
  var year = date.getFullYear()
  var month = ('0' + (date.getMonth() + 1)).slice(-2)
  var day = ('0' + date.getDate()).slice(-2)

  var url = [
    'http://gdx.mlb.com/components/game/mlb',
    '/year_',
    year,
    '/month_',
    month,
    '/day_',
    day,
    '/grid.json'
    ].join('')

    return url
}

var parse = function (json) {

  try {
    var obj = JSON.parse(json)
  }
  catch (e) {
    return console.error(e)
  }

  var games = {}

  obj.data.games.game.forEach(function (value, key) {
    games[value.id] = {
      home: value.home_team_name,
      away: value.away_team_name,
      field: value.venue,
      time: value.event_time,
      status: value.status
    }
  })

  return games

}

exports.get_grid = function (url, cb) {
  return request(url, function (err, res, body) {
    if (err) return err
    !cb ? cb = console.log : ''
    cb(parse(body))
  })
}
