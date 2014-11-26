var db = require('db');

var SkillsMongoDAO = function () {
	var skills = db.collection('skills');

	this.getAllSkills = function (callback) {
		skills.find({}, callback);
	};
};

module.exports = new SkillsMongoDAO();