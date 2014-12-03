var MAX_CONNECTIONS = 4;

var SocketManager = function () {
    var sockets = [];

    this.isFull = function () {
        return sockets.length >= MAX_CONNECTIONS;
    }

    this.addSocket = function (socket) {
        sockets.push(socket);
    }

    this.removeSocket = function (socket) {
        var index = sockets.indexOf(socket);

        if (index !== -1) {
            sockets.splice(index, 1);
        }
    }
};

module.exports = new SocketManager();
