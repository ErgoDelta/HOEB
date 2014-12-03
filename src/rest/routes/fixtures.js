var express = require('express');
var router = express.Router();

var fixturesDao = require('../dao/fs/fixtures_dao');

/* GET fixtures listing. */
router.get('/fixtures', function(req, res) {
	fixturesDao.getAllFixtures(function (err, data) {
		res.send(data);
	});
});

module.exports = router;
