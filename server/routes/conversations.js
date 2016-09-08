var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Conversations = require('../models/conversation');

/* GET conversations listing. */
router.get('/', function(req, res, next) {
  res.json({Conversations});
});

router.post('/', function(req, res, next) {
  res.json({message: req.body});
})

module.exports = router;
