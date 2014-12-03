var Player = require('../entities/player');

var PlayerManager = function () {
    var players_arr = [];
    var players_map = {};

    this.createPlayer = function (socket) {
        var player = new Player();
        players_map[socket.id] = player;
        players_arr.push(player);
        return player;
    };

    this.getPlayer = function (socket) {
        return players[socket.id];
    };

    this.getPlayers = function () {
        return players_arr.slice();
    };

    /**
        should be called when a player is disconnected
    */
    this.removePlayer = function (socket) {
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
