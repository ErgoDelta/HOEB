var MAX_CONNECTIONS = 4;

var SocketManager = function () {
    var sockets = [];

    this.isFull = function () {
      console.log('Server Is Full');
        return sockets.length >= MAX_CONNECTIONS;
    }

    this.addSocket = function (socket) {
      console.log('Adding A Socket');
        sockets.push(socket);
    }

    this.removeSocket = function (socket) {
      console.log('Removing A Socket');
        var index = sockets.indexOf(socket);

        if (index !== -1) {
            sockets.splice(index, 1);
        }
    }
};

module.exports = new SocketManager();
