var Player = require('../entities/player');
var map_manager = require('./map_manager');
var io = require('socket.io');

var MobManager = function () {

    var mobs = [];
    var BASE_MOBS_COUNT = 5;
    var MOBS_PER_LEVEL = 3;

    this.spawnMobs = function (level) {
      console.log('Spawning Mobs');
        mobs = [];
        var map = map_manager.getMap();

        for (var i = 0; i < BASE_MOBS_COUNT + MOBS_PER_LEVEL * level; i++) {
            var mob = new Mob();
            var space = map_manager.getRandomEmptyMapSpace();
            mob.i = space.i;
            mob.j = space.j;
        }
    };

    this.makeMobsAct = function () {
      console.log('Moving Mobs Accross Map...');
        for (var i = 0; i < mobs.length; i++) {
            var mob = mobs[i];
            mob.act();
        }
    }
};

module.exports = new MobManager();
