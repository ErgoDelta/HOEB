var Player = require('../entities/player');

var io = require('socket.io');

var TurnManager = function () {
    var players = [];
    var current_turn_index = 0;

    this.addPlayer = function (player) {
        players.push(player);
    };

    this.removePlayer = function (player) {
        index = players_arr.indexOf(player);
        players_arr.splice(index, 1);
    };

    this.endTurn = function () {
        current_turn_index = (current_turn_index + 1) % players.length;
        io.emit('new turn', this.getActivePlayer().id);
    }

    this.getActivePlayer = function () {
        return players[current_turn_index];
    }
};

module.exports = new TurnManager();
