var fs = require('fs');
var config = require('../../hoeb_fs_config');

var HeroesFileSystemDAO = function () {
	
	var heroes = [];
	var heroesFilePath = config.getHeroesFilePath();
	
	var writeHeroesFile = function () {
		fs.writeFile(config.getHeroesFilePath(), heroes, function (err, data) {
			if (err) {
				console.log('Error writing to ' + heroesFilePath, err);
				return;
			}
		});
	};
	
	var loadHeroesFile = function () {
		fs.readFile(config.getHeroesFilePath(), function (err, data) {
			if (err) {
				console.log('Error reading ' + heroesFilePath, err);
				return;
			}
			heroes = JSON.parse(data);
		});
	};

	this.getAllHeroes = function (callback) {
		callback(null, heroes);
	};
	
	loadHeroesFile();
};

module.exports = new HeroesFileSystemDAO();