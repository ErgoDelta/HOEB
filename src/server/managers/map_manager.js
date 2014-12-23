var player_manager = require('./player_manager')
var ROT = require('../digger');

var MapManager = function () {
    var map = [[]];
    var BASE_WIDTH = 30;
    var BASE_HEIGHT = 30;
    var LEVEL_MOD = 3;
    var INVALID_SPOT = 1;

    this.generateMap = function (level) {
      console.log('Generating Map');
        var width = BASE_WIDTH + level * LEVEL_MOD;
        var height = BASE_HEIGHT + level * LEVEL_MOD;

        map = new Array(height);
        for (var i = 0; i < height; i++) {
            map[i] = new Array(width);
        }

        new ROT.Map.Digger(width, height)
            .create(function (x, y, value) {
                map[y][x] = value;
            });

        console.log(map);

    };

    this.getMap = function () {
      console.log('Getting Map')
        return map.slice();
    }

    var getRandomI = function () {
      console.log('Generating Random "I"');
        return parseInt(Math.random() * map.length)
    }

    var getRandomJ = function () {
      console.log('Generating Random "J"');
        return parseInt(Math.random() * map[0].length)
    }

    this.getRandomEmptyMapSpace = function () {
      console.log('Getting A Random Empty Map Space');
        var ri = getRandomI(),
            rj = getRandomJ();
        console.log('ri: "' + ri + '" rj: "' + rj + '"');

        // Keep on trying until you find open spaces
        while (map[ri][rj] === INVALID_SPOT) {
            ri = getRandomI();
            rj = getRandomJ();
        }

        return {
            i: ri,
            j: rj
        };
    }

    this.isValidMoveLocation = function (i, j) {
      console.log('Checking To See If This Is A Valid Move Location');
        return i >= 0 &&
            i < map.length &&
            j >= 0 &&
            j < map[0].length &&
            map[i][j] !== INVALID_SPOT;
    }
};

module.exports = new MapManager();
