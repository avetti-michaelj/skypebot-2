var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Conversation = require('../models/conversation');

/* GET conversations listing. */
router.get('/', function(req, res, next) {
  Conversation.find(function (err, conversations) {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
          res.json({conversations});
        }
  });
});

router.post('/', function(req, res, next) {
  var conversation = new Conversation(req.body);
  res.json(req.body);
  Conversation.create({
    From: req.body.from,
    To: req.body.to,
    ConversationID: req.body.id,
    Time: req.body.time
  },
  function (err, Conversation) {
    if (err) {
      console.log(err);
      res.end(err);
    }
  });
});

module.exports = router;
