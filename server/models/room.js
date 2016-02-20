var mongoose = require('mongoose'),
    ObjectId = mongoose.Schema.Types.ObjectId;

var roomSchema = mongoose.Schema({
    name: String
})

module.exports = mongoose.model('Room', roomSchema)
