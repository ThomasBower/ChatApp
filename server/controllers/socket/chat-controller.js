//var Message = require('../../models').Message

// Evil code
var rooms = ['lobby'],
    defaultRoom = rooms[0],
    messages = [],
    users = []

module.exports = function(io, socket) {
    socket.on('new user', function(user) {
        // pre: user.name
        user.room = defaultRoom
        users.push(user)

        socket.join(defaultRoom)

        io.in(defaultRoom).emit('new user', user)
        socket.emit('joined', messages)
        // post: user joins default room
    })

    socket.on('new room', function(room) {
        // pre: room.name
        // post: add new room to db
    })

    socket.on('join room', function(join) {
        // pre: join.username, join.roomname
        // post: add user to room members
    })

    socket.on('new message', function(message) {
        // pre: message.text, username, roomname, timestamp

        messages.push(message)
        console.log(messages)

        io.in(message.room).emit('new message', message)
        // post: add new message to db
    })
}
