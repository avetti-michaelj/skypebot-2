var express = require('express');
var router = express.Router();

/* GET conversations listing. */
router.get('/', function(req, res, next) {
  res.json({message: 'Let me die where I lie, \'neath the curse of my lover\'s eye.'});
});

router.post('/', function(req, res, next) {
  res.json({message: req.body});
})

module.exports = router;
