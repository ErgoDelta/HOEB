var turn_manager = require('../managers/turn_manager');
var player_manager = require('../managers/player_manager');

var EndTurnProcsesor = function () {
    this.process = function (socket, data) {
        var player = player_manager.getPlayer(socket);
        turn_manager.endTurn(player);
    }
};

module.exports = new EndTurnProcsesor();
