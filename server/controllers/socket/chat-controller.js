var chatModels = require('../../models')

module.exports = function(io, socket) {
    socket.on('new user', function(user){
        // pre: user.name
        // post: add new user to db
    })

    socket.on('new room', function(room){
        // pre: room.name
        // post: add new room to db
    })

    socket.on('join room', function(join){
        // pre: join.username, join.roomname
        // post: add user to room members
    })

    socket.on('new message', function(message){
        // pre: message.text, username, roomname, timestamp
        // post: add new message to db
    })
}
