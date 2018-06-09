const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
	res.json({msg: 'testing schools route'});
})

module.exports = router;