//bbox: [-122.05862045288086, 36.93768132842635, -121.97296142578124, 37.00378647456494]


'use strict';
var tileReduce = require('tile-reduce');
var path = require('path');
// var argv = require('minimist')(process.argv.slice(2));
// var mbtilesPath = argv.mbtiles;


tileReduce({
	bbox: [-168, -64, 193, 84],

  zoom: 12,
  map: path.join(__dirname, '/railway.js'),
  sources: [{
    name: 'osm',
    mbtiles: __dirname + '/latest.planet.mbtiles',
    raw: false
  }]
})
.on('reduce', function(feature) {
  // if (feature.length > largest.length) {
  //   largest.length = feature.length;
  //   largest.feature = feature.feature;
  // }
})
.on('end', function() {

  // write the largest roundabout to stderr
  // process.stderr.write(JSON.stringify(largest));
});