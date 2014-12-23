var player_manager = require('../managers/player_manager');
var map_manager = require('../managers/map_manager');
var globals = require('../globals');

var GameStateManager = function () {
    var level = 0;
    var areAllPlayersDead = function () {
        console.log('Checking To See If All Players Are Dead');
        var players = player_manager.getPlayers();
        var allDead = true;

        for (var i = 0; i < players.length; i++) {
            var player = players[i];
            if (player.isAlive()) {
                allDead = false;
                console.log('At Least Player "' + player + '" Is Not Dead');
            }
        }

        return allDead;
    }

    this.update = function () {
      var i = 0,
          location = null,
          players = null;

      console.log('Updating Game State');
        if (areAllPlayersDead()) {
          console.log('Restarting Game');
          this.restart();
        } else {
          globals.io.emit('players', player_manager.getJSONPlayers());
        }
    };

    this.nextLevel = function () {
      console.log('Moving To Next Level');
        level += 1;
    }

    this.restart = function () {
        console.log('Restarting Game State');
        level = 0;
        var player = null,
            player_location = null;

        map_manager.generateMap(level);

        var players = player_manager.getPlayers();
        for (var i = 0; i < players.length; i += 1) {
            player = players[i];
            player.setHealth(1);
            player_location = map_manager.getRandomEmptyMapSpace()
            player.setLocationPoint(player_location);
            //map_manager.spawn(player);
        }

        globals.io.emit('map', map_manager.getMap());

        //mob_manager.spawnMobs(level);
    }
};

module.exports = new GameStateManager();
