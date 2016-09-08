var mongoose = require('mongoose');

//alias the schema
var Schema = mongoose.Schema;

//define the schemas
var Conversations = new Schema({
    timestamp: Date,
    from: String,
    conversation: String,
    recipient: String
}, {
	collection: 'conversations'
});

module.exports = mongoose.model('Conversation', Conversations);