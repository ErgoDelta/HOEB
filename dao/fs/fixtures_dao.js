var fs = require('fs');
var config = require('../../hoeb_fs_config');

var FixturesFileSystemDAO = function () {
	
	var fixtures = [];
	var fixturesFilePath = config.getFixturesFilePath();
	
	var writeFixturesToFile = function () {
		fs.writeFile(fixturesFilePath, heroes, function (err, data) {
			if (err) {
				console.log('Error writing to ' + fixturesFilePath, err);
				return;
			}
		});
	};
	
	var loadFixturesFromFile = function () {
		fs.readFile(fixturesFilePath, function (err, data) {
			if (err) {
				console.log('Error reading ' + fixturesFilePath, err);
				return;
			}
			fixtures = JSON.parse(data);
		});
	};

	this.getAllFixtures = function (callback) {
		callback(null, fixtures);
	};

	loadFixturesFromFile();
};

module.exports = new FixturesFileSystemDAO();