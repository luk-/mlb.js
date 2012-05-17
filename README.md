#mlb.js

##major league blernsball!

[![Build Status](https://secure.travis-ci.org/st-luke/mlb.js.png)](http://travis-ci.org/st-luke/mlb.js)

Find all your favorite blernsball sportsball scores and events and games and schedule!

**Installation**

`npm install mlb`

Then in your code:

`var mlb = require('mlb')`

Mlb.js has many features useful for finding out sportsball fun facts, such as:

**Schedules!**

You can get some sweet SPORTS object of current games using `mlb.games.get`

Ex:

```javascript
mlb.games.get(function(err, res) {
  console.log(res)
})
```
Or give it a date:
```
mlb.games.get(function (err, res) {
  console.log(res)
}, '2012, 05, 14')
```

Output (truncated):

```javascript
{ '2012/05/15/houmlb-phimlb-1': 
   { home: 'Phillies',
     away: 'Astros',
     field: 'Citizens Bank Park',
     time: '1:05 PM',
     status: 'Final' },
  '2012/05/15/sdnmlb-wasmlb-1': 
   { home: 'Nationals',
     away: 'Padres',
     field: 'Nationals Park',
     time: '1:05 PM',
     status: 'Final' },
  '2012/05/15/clemlb-minmlb-1': 
   { home: 'Twins',
     away: 'Indians',
     field: 'Target Field',
     time: '1:10 PM',
     status: 'Final' } }
```
Neat!

Want some other blernsball sportsball details? OK!

Gonna need to parse that game ID first:

`var game = mlb.games.url('2012/05/15/kcamlb-texmlb-1')`

OK we're ready for some more SPOOOORTS!

```javascript
mlb.events(game, function (err, res, body) {
  res.forEach(function (val) {
    console.log('Event: ' + val['@'].event)
    console.log('Description: ' + val['@'].des)
    console.log('Time: ' + val['@'].start_tfs_zulu + '\n')
  })
}, {limit: 2})
```

Output:

```
Event: Groundout
Description: Elvis Andrus grounds out, shortstop Alcides Escobar to first baseman Eric Hosmer.  
Time: 2012-05-16T02:46:42Z

Event: Home Run
Description: Brandon Snyder homers (3) on a fly ball to left field.  
Time: 2012-05-16T02:41:43Z
```

But I need the sports score so I can find out who won the game and support my TEEEEAM!

```
mlb.score(game, function (err, res) {
  console.log(res)
})
```

Output:

```
{ Rangers: '4', Royals: '7' }
```

Tests:

`npm test`


SPORTS ARE FINALLY FUN


###license: MIT
