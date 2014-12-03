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

socket.on('id', function (key) {
    "use strict";

});

socket.on('map', function (m) {
    map = m;
    console.log(map);
});

function render() {
    "use strict";

    for (var i = 0; i < map.length; i++) {
        for (var j = 0; j < map[0].length; j++) {
            var dist = 20;
            var x = j * dist;
            var y = i * dist;

            if (map[i][j] === 0) {
                context.fillStyle = '#FFF';
            } else {
                context.fillStyle = '#000';
            }
            
            context.fillRect(x, y, dist, dist);
        }
    }
}

setInterval(function () {
    render();
}, 50);

$(window).keyup(function (e) {
    "use strict";
    var code = e.keyCode || e.which;

    if (code === W) {
        socket.emit('move', {up: true});
    } else if (code === A) {
        socket.emit('move', {left: true});
    } else if (code === S) {
        socket.emit('move', {down: true});
    } else if (code === D) {
        socket.emit('move', {right: true});
    }

});
