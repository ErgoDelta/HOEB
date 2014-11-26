var db = require('../../db');

var FixturesMongoDAO = function () {
	
	var fixtures = db.collection('fixtures');

	this.getAllFixtures = function (callback) {
		fixtures.find({}, callback);
	};
};

module.exports = new FixturesMongoDAO();