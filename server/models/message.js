var mongoose = require('mongoose'),
    ObjectId = mongoose.Schema.Types.ObjectId;

var messageSchema = mongoose.Schema({
    created: Date,
    text: String
    user: {
        type: ObjectId,
        ref: 'User'
    }
})

module.exports = mongoose.model('Message', messageSchema)
