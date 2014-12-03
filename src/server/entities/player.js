
var Player = function () {
    var health = 0;
    var i = 0;
    var j = 0;
    var movesRemaining = 0;

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

    this.decrementMovesRemaining = function () {
        movesRemaining -= 1;
    }

    this.getLocation = function () {
        return {
            i: i,
            j: j
        };
    }
};

module.exports = Player;
