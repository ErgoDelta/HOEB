var express = require('express');
var router = express.Router();

var mobsDao = require('../dao/fs/mobs_dao');

/* GET fixtures listing. */
router.get('/mobs', function(req, res) {
	mobsDao.getAllMobs(function (err, data) {
		res.send(data);
	});
});

module.exports = router;
