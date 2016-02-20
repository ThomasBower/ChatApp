var mongoose = require('mongoose')

var messageSchema = mongoose.Schema({
    text: String,
    user: String,
    room: String
})

module.exports = mongoose.model('Message', messageSchema)
