var socketManager = require('../managers/socket_manager');
var map_manager = require('../managers/map_manager');

var ConnectEventProcessor = function () {
    this.process = function (socket) {
        if (!socketManager.isFull()) {
            socketManager.addSocket(socket);

            socket.emit('map', map_manager.getMap());
        } else {
            return undefined;
        }
    }
};

module.exports = new ConnectEventProcessor();
