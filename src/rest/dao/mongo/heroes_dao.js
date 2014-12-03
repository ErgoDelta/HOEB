var db = require('db');

var HeroesMongoDAO = function () {
	
	var heroes = db.collection('heroes');

	this.getAllHeroes = function (callback) {
		heroes.find({}, callback);
	};
};

module.exports = new HeroesMongoDAO();