var db = require('db');

var ItemsMongoDAO = function () {
	
	var items = db.collection('items');

	this.getAllItems = function (callback) {
		items.find({}, callback);
	};
};

module.exports = new ItemsMongoDAO();