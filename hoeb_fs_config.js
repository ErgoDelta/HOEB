var path = require('path');

var Config = function () {
	var SEPERATOR = '/';
	var DATA_PATH = path.join(__dirname, 'data');
	
	var HEROES_FILE = 'heroes.json'
	var ITEMS_FILE = 'items.json'
	var MOBS_FILE = 'mobs.json'
	var SKILLS_FILE = 'skills.json'
	var FIXTURES_FILE = 'fixtures.json'
	
	this.getHeroesFilePath = function () {
		return path.join(DATA_PATH, HEROES_FILE);
	};
	
	this.getItemsFilePath = function () {
		return path.join(DATA_PATH, ITEMS_FILE);
	};
	
	this.getMobsFilePath = function () {
		return path.join(DATA_PATH, MOBS_FILE);
	};
	
	this.getSkillsFilePath = function () {
		return path.join(DATA_PATH, SKILLS_FILE);
	};
	
	this.getFixturesFilePath = function () {
		return path.join(DATA_PATH, FIXTURES_FILE);
	}
};

module.exports = new Config();