var fs = require('fs');
var config = require('../../hoeb_fs_config');

var ItemsFileSystemDAO = function () {
	
	var items = [];
	var itemsFilePath = config.getItemsFilePath();
	
	var writeItemsToFile = function () {
		fs.writeFile(itemsFilePath, heroes, function (err, data) {
			if (err) {
				console.log('Error writing to ' + itemsFilePath, err);
				return;
			}
		});
	};
	
	var loadItemsFromFile = function () {
		fs.readFile(itemsFilePath, function (err, data) {
			if (err) {
				console.log('Error reading ' + itemsFilePath, err);
				return;
			}
			items = JSON.parse(data);
		});
	};

	this.getAllItems = function (callback) {
		callback(null, items);
	};
	
	loadItemsFromFile();
};

module.exports = new ItemsFileSystemDAO();