var express = require('express');
var router = express.Router();

var heroesDao = require('../dao/fs/heroes_dao');

/* GET fixtures listing. */
router.get('/heroes', function(req, res) {
	heroesDao.getAllHeroes(function (err, data) {
		res.send(data);
	});
});

module.exports = router;
