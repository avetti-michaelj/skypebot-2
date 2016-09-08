var mongoose = require('mongoose');

//alias the schema
var Schema = mongoose.Schema;

//define the schemas
var Conversations = new Schema({
    From: String,
    To: String,
    ConversationID: String,
    Time: String
}, {
	collection: 'conversations'
});

module.exports = mongoose.model('Conversation', Conversations);