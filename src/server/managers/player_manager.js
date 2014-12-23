var Player = require('../entities/player')

var PlayerManager = function () {
    var players_arr = [];
    var players_map = {};

    this.createPlayer = function (socket) {
      console.log('Creating Player');
        var player = new Player();
        players_map[socket.id] = player;
        players_arr.push(player);
        return player;
    };

    this.getPlayer = function (socket) {
      console.log('Getting Player');
        return players_map[socket.id];
    };

    this.getPlayers = function () {
      console.log('Getting All Players');
        return players_arr.slice();
    };

    this.getJSONPlayers = function () {
      console.log('Getting All Player JSONs');
      var json_players = [];
      for(var i = 0, max_i = players_arr.length; i < max_i; i += 1) {
        json_players.push(players_arr[0].toJSON());
      }
      return json_players.slice();
    }

    /**
        should be called when a player is disconnected
    */
    this.removePlayer = function (socket) {
      console.log('Removing A Player');
        var player,
            index,
            id;
        id = socket.id;
        player = players_map[id];
        delete players_map[id];
        index = players_arr.indexOf(player);
        players_arr.splice(index, 1);
    };
};

module.exports = new PlayerManager();
