var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Conversation = require('../models/conversation');

/* GET conversations listing. */
router.get('/', function(req, res, next) {/*
  Conversation.find(function (err, conversations) {
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
          res.json({conversations});
        }
  });*/
});

router.post('/', function(req, res, next) {
  var conversation = new Conversation(req.body);
  Conversation.create({
    timestamp: req.body.timestamp,
    from: req.body.from.name,
    recipient: req.body.recipient.name,
    message: req.body.text
  },
  function (err, Conversation) {
    if (err) {
      console.log(err);
      res.end(err);
    }
  });
});

module.exports = router;
