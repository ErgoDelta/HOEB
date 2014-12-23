/*global io, $ */
/*jslint bitwise: true */
var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");
$(window).resize(function () {
    "use strict";
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
$(window).resize();

var socket = io.connect('http://localhost:5000');

var W = 87;
var A = 65;
var S = 83;
var D = 68;

var map = [[]];
var players = [];

socket.on('id', function (key) {
    "use strict";
    console.log('ID : "' + key + '"');
});

socket.on('map', function (m) {
    map = m;
    console.dir(map);
});

socket.on('players', function (p) {
  players = p;
  console.dir(players);
});

function render() {
    "use strict";
    var dist = 20,
        x = 0,
        y = 0,
        player = null,
        cur_map_location = null;

    for (var i = 0, max_i = map.length; i < max_i; i += 1) {
        for (var j = 0, max_j = map[0].length; j < max_j; j += 1) {
            x = j * dist;
            y = i * dist;
            cur_map_location = map[i][j];

            if (cur_map_location === 0) {
                context.fillStyle = '#FFF';
            } else {
                context.fillStyle = '#000';
            }

            context.fillRect(x, y, dist, dist);
        }
    }

    for(var i = 0, max_players = players.length; i < max_players; i += 1) {
      player = players[i];
      x = player.location.j * dist;
      y = player.location.i * dist;

      context.fillStyle = '#AAA';
      context.fillRect(x, y, dist, dist);
    }
}

setInterval(function () {
    render();
}, 50);

$(window).keyup(function (e) {
    "use strict";
    console.log('Key Pressed : ' + e);
    var code = e.keyCode || e.which;

    if (code === W) {
        socket.emit('move', { up: true });
    } else if (code === A) {
        socket.emit('move', { left: true });
    } else if (code === S) {
        socket.emit('move', { down: true });
    } else if (code === D) {
        socket.emit('move', { right: true });
    }
});
