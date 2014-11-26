var fs = require('fs');
var config = require('../../hoeb_fs_config');

var MobsFileSystemDAO = function () {
	
	var mobs = [];
	var mobsFilePath = config.getMobsFilePath();
	
	var writeItemsToFile = function () {
		fs.writeFile(mobsFilePath, heroes, function (err, data) {
			if (err) {
				console.log('Error writing to ' + mobsFilePath, err);
				return
			}
		});
	};
	
	var loadMobsFromFile = function () {
		fs.readFile(mobsFilePath, function (err, data) {
			if (err) {
				console.log('Error reading ' + mobsFilePath, err);
				return
			}
			mobs = JSON.parse(data);
		});
	};

	this.getAllMobs = function (callback) {
		callback(null, mobs);
	};

	loadMobsFromFile();
};

module.exports = new MobsFileSystemDAO();