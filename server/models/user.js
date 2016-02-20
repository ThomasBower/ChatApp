var mongoose = require('mongoose'),
    ObjectId = mongoose.Schema.Types.ObjectId;

var userSchema = mongoose.Schema({
        username: String,
	room: [{
	    Type: ObjectId 
	    ref: 'room'
	}]
})

module.exports = mongoose.model('User', userSchema)
