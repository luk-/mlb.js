var request = require('request')
  , util    = require('util')
  , xml2js  = require('xml2js');


//request('http://gdx.mlb.com/components/game/mlb/year_2012/month_04/day_09/gid_2012_04_09_nyamlb_balmlb_1/game_events.xml', function (err, res, body) {
request('http://gdx.mlb.com/components/game/mlb/year_2012/month_04/day_09/gid_2012_04_09_nyamlb_balmlb_1/notifications/notifications_full.xml', function (err, res, body) {
  if (err) {
    return console.error(err);
  }
  else {

    //return console.log(body);

    var parser = new xml2js.Parser({explicitRoot: true});
    parser.parseString(body, function (err, res) {
      //console.log(util.inspect(res, true, null));
      console.log(JSON.stringify(res));
    });


  }

});
