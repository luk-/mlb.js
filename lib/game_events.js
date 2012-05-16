var games = require('./games')
  , request = require('request')
  , xml2js = require('xml2js')

var parser = new xml2js.Parser()

exports.score = function (url, cb) {

  url = url + '/linescore.json'
  !cb ? cb = console.log : ''

  return request(url, function (err, res, body) {

    if (err) {
      return cb(err)
    }

    var score_json = JSON.parse(body)
      , score = score_json.data.game
      , team_scores = {}
    team_scores[score.home_team_name] = score.home_team_runs
    team_scores[score.away_team_name] = score.away_team_runs
    return cb(null, team_scores)
    })

}



exports.events = function (url, cb, options) {
  
  url = url + '/game_events.xml'
  !cb ? cb = console.log : ''
  
  return request(url, function (err, res, body) {

    if (err) {
      return cb(err)
    }

    parser.parseString(body, function (err, res) {
      if (err) {
	return cb(err)
      }

      var all_events = []

      res.inning.forEach(function (val, key) {
	if (val.top.atbat && Array.isArray(val.top.atbat)) {
	  val.top.atbat.forEach(function (val, key) {
	    all_events.push(val)
	  })
	}
	if (val.bottom.atbat && Array.isArray(val.bottom.atbat)) {
	  val.bottom.atbat.forEach(function (val, key) {
	    all_events.push(val)
	  })
	}
      })

      if (options && options.hasOwnProperty('limit')) {
	cb(null, all_events.slice('-' + options.limit).reverse(), res)
      } else {
        cb(null, all_events.reverse(), res)
      }

    })

  })

}
