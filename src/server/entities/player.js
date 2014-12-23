
var Player = function () {
    var id = parseInt(Math.random());
    var health = 0;
    var i = 0;
    var j = 0;
    var movesRemaining = 0;

    this.getId = function() {
      return id;
    }

    this.setMovesRemaining = function (amount) {
        movesRemaining = amount;
    }

    this.setHealth = function (amount) {
        health = amount;
    }

    this.isAlive = function () {
        return health > 0;
    }

    this.moveUp = function () {
        i -= 1;
    }

    this.moveDown = function () {
        i += 1;
    }

    this.moveRight = function () {
        j += 1;
    }

    this.moveLeft = function () {
        j -= 1;
    }

    this.setLocation = function(ni, nj) {
        i = ni;
        j = nj;
    }

    this.setLocationPoint = function(point) {
      i = point.i;
      j = point.j;
    }

    this.decrementMovesRemaining = function () {
        movesRemaining -= 1;
    }

    this.getLocation = function () {
        return {
            i: i,
            j: j
        };
    }

    this.toJSON = function () {
      return {
        id: this.getId(),
        location: this.getLocation(),
        alive: this.isAlive()
      };
    }
};

module.exports = Player;
