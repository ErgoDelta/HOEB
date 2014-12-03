var fs = require('fs');
var config = require('../../hoeb_fs_config');

var SkillsFileSystemDAO = function () {
	
	var skills = [];
	var skillsFilePath = config.getItemsFilePath();
	
	var writeSkillsToFile = function () {
		fs.writeFile(skillsFilePath, heroes, function (err, data) {
			if (err) {
				console.log('Error writing to ' + skillsFilePath, err);
				return;
			}
		});
	};
	
	var loadSkillsFromFile = function () {
		fs.readFile(skillsFilePath, function (err, data) {
			if (err) {
				console.log('Error reading ' + skillsFilePath, err);
				return;
			}
			skills = JSON.parse(data);
		});
	};

	this.getAllSkills = function (callback) {
		callback(null, skills);
	};
	
	loadSkillsFromFile();
};

module.exports = new SkillsFileSystemDAO();