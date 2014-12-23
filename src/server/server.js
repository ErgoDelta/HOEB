var app = require('express')(),
    http = require('http').Server(app),
    io = require('socket.io')(http),
    globals = require('./globals'),

    connect_event_processor = require('./events/connect_event'),
    end_turn_processor = require('./events/end_turn_event'),
    move_event = require('./events/move_event'),

    player_manager = require('./managers/player_manager'),
    game_state_manager = require('./managers/game_state_manager'),
    socket_manager = require('./managers/socket_manager'),

    port;

globals.io = io;
port = process.argv[2];

if (!port) {
    console.log("Error: Please supply a port when starting a HOEB server!");
    return;
}

io.on('connection', function (socket) {
    'use strict';
    console.log('Connection');
    if (socket_manager.isFull()) {
        socket.emit("server full", {});
        player_manager.removePlayer(socket);
        socket.disconnect();
    } else {
        player_manager.createPlayer(socket);
        game_state_manager.update();
    }

    socket.on('end turn', function (data) {
      console.log('Ending Turn');
        end_turn_event.process(socket, data);
    });

    socket.on('move', function (data) {
      console.log('Moving')
        move_event.process(socket, data);
        game_state_manager.update();
    });

    socket.on('disconnect', function () {
      console.log('Disconnection');
        player_manager.removePlayer(socket);
        game_state_manager.update();
    });
});

http.listen(5000, function () {
    'use strict';
});
