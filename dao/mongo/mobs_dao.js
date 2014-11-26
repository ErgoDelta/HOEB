var db = require('db');

var MobsMongoDAO = function () {
	
	var mobs = db.collection('mobs');

	this.getAllMobs = function (callback) {
		mobs.find({}, callback);
	};
};

module.exports = new MobsMongoDAO();