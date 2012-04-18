var games = require('./games')
  , request = require('request')
  , xml2js = require('xml2js')

var parser = new xml2js.Parser()


exports.events = function (url, cb, options) {
  
  url = url + '/game_events.xml'
  !cb ? cb = console.log : ''
  
  return request(url, function (err, res, body) {
    if (err) return err


    parser.parseString(body, function (err, res) {
      if (err) return err
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
	      cb(err, res, all_events.slice('-' + options.limit).reverse())
      }
      else {
        cb(err, res, all_events.reverse())
      }

    })


  })

}
