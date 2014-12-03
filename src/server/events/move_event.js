var turn_manager = require('../managers/turn_manager');
var player_manager = require('../managers/player_manager');

var MoveEvent = function () {
    this.process = function (socket, moveCommand) {
        var activePlayer = turn_manager.getActivePlayer();
        var playerSendingEvent = player_manager.getPlayer(socket);
        if (activePlayer === playerSendingEvent) {
            var playerToMove = activePlayer;

            var locationBeforeMove = playerToMove.getLocation();

            if (moveCommand.up === true) {
                playerToMove.moveUp();
            } else if (moveCommand.down == true) {
                playerToMove.moveDown();
            } else if (moveCommand.left === true) {
                playerToMove.moveLeft();
            } else if (moveCommand.right === true) {
                playerToMove.moveRight();
            }

            var playerLocation = playerToMove.getLocation();
            var pi = playerLocation.i;
            var pj = playerLocation.j;
            if (!map_manager.isValidMoveLocation(pi, pj)) {
                playerToMove.setLocation(locationBeforeMove);
            } else {
                playerToMove.decrementMovesRemaining();
            }

            /*
            var mob = mob_manager.getMobAt(i, j);
            if (mob) {
                mob.hurt(player.rollDamage());
                if (!mob.isAlive()) {
                    mob_manager.remove(mob);
                }
                playerToMove.setMovesRemaining(0);
                turn_manager.endTurn();
            }
            */
        }
    }
};

module.exports = new MoveEvent();
