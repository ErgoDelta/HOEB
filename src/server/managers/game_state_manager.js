var player_manager = require('../managers/player_manager');
var map_manager = require('../managers/map_manager');
var Globals = require('../globals');

var GameStateManager = function () {

    var level = 0;

    var areAllPlayersDead = function () {
        var players = player_manager.getPlayers();
        var allDead = true;

        for (var i = 0; i < players.length; i++) {
            var player = players[i];
            if (player.isAlive()) {
                allDead = false;
            }
        }

        return allDead;
    }

    this.update = function () {
        if (areAllPlayersDead()) {
            this.restart();
        }
    };

    this.nextLevel = function () {
        level += 1;
    }

    this.restart = function () {
        console.log("game state restarting");
        level = 0;

        map_manager.generateMap(level);

        var players = player_manager.getPlayers();
        for (var i = 0; i < players.length; i++) {
            var player = players[i];
            player.setHealth(1);
            //map_manager.spawn(player);
        }

        Globals.io.emit('map', map_manager.getMap());

        //mob_manager.spawnMobs(level);
    }
};

module.exports = new GameStateManager();
