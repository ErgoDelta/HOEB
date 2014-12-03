var express = require('express');
var router = express.Router();

var skillsDao = require('../dao/fs/skills_dao');

/* GET fixtures listing. */
router.get('/skills', function(req, res) {
	skillsDao.getAllSkills(function (err, data) {
		res.send(data);
	});
});

module.exports = router;
