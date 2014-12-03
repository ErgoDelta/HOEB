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

    if (socket_manager.isFull()) {
        socket.emit("server full", {});
        player_manager.removePlayer(socket);
        socket.disconnect();
    } else {
        player_manager.createPlayer(socket);
        game_state_manager.update();
    }

    socket.on('end turn', function (data) {
        end_turn_event.process(socket, data);
    });

    socket.on('move', function (data) {
        move_event.process(socket, data);
    });

    socket.on('disconnect', function () {
        player_manager.removePlayer(socket);
    });

    /*
    socket.on('equip', function (data) {
        equip_processor.process(socket, data);
    });

    socket.on('unequip', function (data) {
        unequip_processor.process(socket, data);
    });

    socket.on('use item', function (data) {
        use_item_processor.process(socket, data);
    });

    socket.on('use skill', function (data) {
        use_skill_processor.process(socket, data);
    });
    */
});

setInterval(function () {
    'use strict';

}, 20);

http.listen(5000, function () {
    'use strict';
});
