var mongojs = require('mongojs');

var Connect = function () {
	var collections = [
		'fixtures',
		'heroes',
		'items',
		'mobs',
		'skills'
	];
	var db = mongojs('hoeb', collections);

	return db;
};

module.exports = new Connect();