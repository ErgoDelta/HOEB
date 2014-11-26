var express = require('express');
var router = express.Router();

var itemsDao = require('../dao/fs/items_dao');

/* GET fixtures listing. */
router.get('/items', function(req, res) {
	itemsDao.getAllItems(function (err, data) {
		res.send(data);
	});
});

module.exports = router;
