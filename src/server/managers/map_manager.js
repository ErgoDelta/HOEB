var Player = require('../entities/player');
var ROT = require('../digger');

var MapManager = function () {
    var map;
    var BASE_WIDTH = 30;
    var BASE_HEIGHT = 30;
    var LEVEL_MOD = 3;
    var INVALID_SPOT = 1;

    this.generateMap = function (level) {
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
        return map.slice();
    }

    var getRandomI = function () {
        parseInt(Math.random() * map.length)
    }

    var getRandomJ = function () {
        parseInt(Math.random() * map[0].length)
    }

    this.getRandomEmptyMapSpace = function () {
        var ri = getRandomI();
        var rj = getRandomJ();

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
        return i >= 0 &&
            i < map.length &&
            j >= 0 &&
            j < map[0].length &&
            map[i][j] !== INVALID_SPOT;
    }
};

module.exports = new MapManager();
