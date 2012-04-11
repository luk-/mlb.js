var grid = require('./grid')

grid.get_grid(grid.url(), grid_parse);

function grid_parse(json) {

  try {
    var obj = JSON.parse(json);
  }
  catch (e) {
    return console.error(e);
  }

  console.log(obj.data.games);


}

